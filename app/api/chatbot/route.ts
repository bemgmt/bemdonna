import { NextRequest, NextResponse } from "next/server"
import knowledgeBase from "@/lib/chatbot-knowledge-base.json"
import { promises as fs } from "fs"
import path from "path"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface KnowledgeSnippet {
  id: string
  title: string
  content: string
  source: "knowledge-base" | "blog"
  sourcePath?: string
  terms: string[]
}

const BLOG_CONTENT_DIR = path.join(process.cwd(), "public", "blog-content")
const SNIPPET_CACHE_TTL_MS = 5 * 60 * 1000

const STOP_WORDS = new Set([
  "about", "after", "also", "been", "being", "both", "can", "from", "have", "just", "more",
  "that", "than", "their", "there", "they", "this", "what", "when", "where", "which", "with",
  "would", "your", "you", "our", "and", "the", "for", "are", "how", "why", "who", "into",
  "does", "dont", "isnt", "cant", "will", "shall", "should", "could",
])

let cachedSnippets: KnowledgeSnippet[] | null = null
let cachedAt = 0

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 })
    }

    // Check if AI API keys are configured
    const useAI = process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY

    const snippets = await getKnowledgeSnippets()
    const relevantSnippets = retrieveRelevantSnippets(message, snippets)
    let response: string

    if (useAI) {
      // Use AI-powered responses
      response = await generateAIResponse(message, history, relevantSnippets)
    } else {
      // Fallback to local retrieval response
      response = generateFallbackResponse(message, relevantSnippets)
    }

    return NextResponse.json({ message: response }, { status: 200 })
  } catch (error) {
    console.error("Chatbot API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

async function generateAIResponse(message: string, history: Message[], relevantSnippets: KnowledgeSnippet[]): Promise<string> {
  const contextBlock = relevantSnippets
    .slice(0, 6)
    .map((snippet) => {
      const sourceLabel = snippet.source === "blog"
        ? `Blog (${snippet.sourcePath ?? "public/blog-content"})`
        : "Knowledge Base"
      return `- ${snippet.title} [${sourceLabel}]\n${snippet.content}`
    })
    .join("\n\n")

  const systemPrompt = `You are Donna, an AI operations operator for Bird's Eye Management Services.

Use the supplied context as the source of truth for product details, pricing, security, use cases, and thought leadership topics.
If context is missing or uncertain, say that clearly and offer the contact path instead of inventing details.

Tone: professional, clear, and concise. Prefer short paragraphs and direct answers.
When relevant, suggest requesting a demo or contacting the team at derek@bem.studio.

Context:
${contextBlock || "- No context retrieved."}`

  // Try OpenAI first
  if (process.env.OPENAI_API_KEY) {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            ...history.slice(-10).map((msg) => ({ role: msg.role, content: msg.content })),
            { role: "user", content: message },
          ],
          temperature: 0.4,
          max_tokens: 500,
        }),
      })

      if (!response.ok) throw new Error("OpenAI API error")

      const data = await response.json()
      return data.choices[0].message.content
    } catch (error) {
      console.error("OpenAI error:", error)
      return generateFallbackResponse(message, relevantSnippets)
    }
  }

  // Try Anthropic if OpenAI not available
  if (process.env.ANTHROPIC_API_KEY) {
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-3-haiku-20240307",
          max_tokens: 500,
          system: systemPrompt,
          messages: [
            ...history.slice(-10).map((msg) => ({ role: msg.role, content: msg.content })),
            { role: "user", content: message },
          ],
        }),
      })

      if (!response.ok) throw new Error("Anthropic API error")

      const data = await response.json()
      return data.content[0].text
    } catch (error) {
      console.error("Anthropic error:", error)
      return generateFallbackResponse(message, relevantSnippets)
    }
  }

  // Fallback
  return generateFallbackResponse(message, relevantSnippets)
}

function generateFallbackResponse(message: string, relevantSnippets: KnowledgeSnippet[]): string {
  const normalized = message.toLowerCase()

  if (normalized.match(/\b(hi|hello|hey|greetings)\b/)) {
    return "Hi! I can help with DONNA product details, pricing, security, use cases, and related blog insights. What would you like to explore?"
  }

  if (normalized.match(/\b(thank|thanks|appreciate|bye|goodbye)\b/)) {
    return "Happy to help. If you want a walkthrough, you can request a demo or contact the team at derek@bem.studio."
  }

  if (normalized.match(/\b(demo|contact|email|support|sales)\b/)) {
    return "You can request a demo from the site or contact Bird's Eye Management Services at derek@bem.studio."
  }

  if (relevantSnippets.length === 0) {
    return "I do not have enough context for that yet. You can ask about pricing, DONNA Network, use cases, security, or recent blog topics, and I can point you to the right details."
  }

  const summaryLines = relevantSnippets.slice(0, 3).map((snippet) => {
    const source = snippet.source === "blog" ? "Blog" : "Knowledge base"
    return `- **${snippet.title}** (${source}): ${trimSentence(snippet.content, 210)}`
  })

  return `Here is what I found:\n\n${summaryLines.join("\n")}\n\nIf you want, I can go deeper on one section or help you find the best plan and next step.`
}

function trimSentence(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength - 3).trimEnd()}...`
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((term) => term.length > 2 && !STOP_WORDS.has(term))
}

function createSnippet(id: string, title: string, content: string, source: "knowledge-base" | "blog", sourcePath?: string): KnowledgeSnippet {
  const normalized = content.replace(/\s+/g, " ").trim()
  return {
    id,
    title,
    content: normalized,
    source,
    sourcePath,
    terms: tokenize(`${title} ${normalized}`),
  }
}

async function getKnowledgeSnippets(): Promise<KnowledgeSnippet[]> {
  const now = Date.now()
  if (cachedSnippets && now - cachedAt < SNIPPET_CACHE_TTL_MS) {
    return cachedSnippets
  }

  const kbSnippets = getKnowledgeBaseSnippets()
  const blogSnippets = await getBlogSnippets()
  cachedSnippets = [...kbSnippets, ...blogSnippets]
  cachedAt = now

  return cachedSnippets
}

function getKnowledgeBaseSnippets(): KnowledgeSnippet[] {
  const kb = knowledgeBase as any
  const snippets: KnowledgeSnippet[] = []

  snippets.push(
    createSnippet(
      "kb-company",
      "DONNA overview",
      `${kb.company?.description ?? ""} ${kb.company?.key_advantage ?? ""}`.trim(),
      "knowledge-base"
    )
  )

  const pricingSummary = (kb.pricing?.tiers ?? [])
    .map((tier: any) => `${tier.tier}: ${tier.price} - ${tier.description}`)
    .join(" | ")
  snippets.push(createSnippet("kb-pricing", "Pricing and plans", pricingSummary, "knowledge-base"))

  snippets.push(
    createSnippet(
      "kb-infra-security",
      "Infrastructure and security",
      `${kb.infrastructure?.foundation ?? ""} ${kb.infrastructure?.voice ?? ""} ${
        (kb.security ?? []).map((entry: any) => `${entry.title}: ${entry.description}`).join(" ")
      }`.trim(),
      "knowledge-base"
    )
  )

  snippets.push(
    createSnippet(
      "kb-modules",
      "Core DONNA modules",
      Object.entries(kb.modules ?? {})
        .map(([moduleName, moduleDescription]) => `${moduleName.replaceAll("_", " ")}: ${moduleDescription}`)
        .join(" "),
      "knowledge-base"
    )
  )

  snippets.push(
    createSnippet(
      "kb-use-cases",
      "Industries and use cases",
      (kb.useCases ?? [])
        .map((useCase: any) => `${useCase.industry}: ${useCase.description}. Outcomes: ${(useCase.outcomes ?? []).join(", ")}`)
        .join(" "),
      "knowledge-base"
    )
  )

  for (const faqEntry of kb.faq ?? []) {
    snippets.push(
      createSnippet(
        `kb-faq-${faqEntry.question}`,
        faqEntry.question,
        faqEntry.answer,
        "knowledge-base"
      )
    )
  }

  return snippets.filter((snippet) => snippet.content.length > 0)
}

async function getBlogSnippets(): Promise<KnowledgeSnippet[]> {
  try {
    const files = await fs.readdir(BLOG_CONTENT_DIR)
    const markdownFiles = files.filter((file) => file.endsWith(".md"))
    const snippets: KnowledgeSnippet[] = []

    for (const fileName of markdownFiles) {
      const fullPath = path.join(BLOG_CONTENT_DIR, fileName)
      const raw = await fs.readFile(fullPath, "utf8")
      const parsed = parseMarkdownWithFrontmatter(raw)
      const blogTitle = parsed.frontmatter.title || cleanHeading(parsed.body) || fileName.replace(".md", "")
      const excerpt = parsed.frontmatter.excerpt || ""
      const cleanBody = cleanMarkdown(parsed.body)
      const bodySections = cleanBody
        .split(/\n{2,}/)
        .filter((chunk) => chunk.trim().length > 120)
        .slice(0, 4)

      const summaryContent = `${excerpt} ${bodySections.join(" ")}`.trim()
      snippets.push(
        createSnippet(
          `blog-${fileName}-summary`,
          `Blog insight: ${blogTitle}`,
          trimSentence(summaryContent, 900),
          "blog",
          `/blog-content/${fileName}`
        )
      )

      if (bodySections[0]) {
        snippets.push(
          createSnippet(
            `blog-${fileName}-detail`,
            `${blogTitle} - key takeaway`,
            trimSentence(bodySections[0], 600),
            "blog",
            `/blog-content/${fileName}`
          )
        )
      }
    }

    return snippets
  } catch (error) {
    console.error("Unable to read blog content for chatbot:", error)
    return []
  }
}

function parseMarkdownWithFrontmatter(raw: string): { frontmatter: Record<string, string>; body: string } {
  const frontmatterMatch = raw.match(/^---\s*[\r\n]+([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)

  if (!frontmatterMatch) {
    return { frontmatter: {}, body: raw }
  }

  const [, frontmatterRaw, body] = frontmatterMatch
  const frontmatter: Record<string, string> = {}
  for (const line of frontmatterRaw.split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":")
    if (separatorIndex === -1) continue
    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "")
    if (key) frontmatter[key] = value
  }

  return { frontmatter, body }
}

function cleanHeading(markdown: string): string {
  const headingMatch = markdown.match(/^#\s+(.+)$/m)
  return headingMatch ? headingMatch[1].trim() : ""
}

function cleanMarkdown(markdown: string): string {
  return markdown
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/`{1,3}[^`]*`{1,3}/g, " ")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/\r/g, "")
    .trim()
}

function retrieveRelevantSnippets(message: string, snippets: KnowledgeSnippet[]): KnowledgeSnippet[] {
  const normalizedMessage = message.toLowerCase()
  const messageTerms = tokenize(message)

  const scored = snippets.map((snippet) => {
    const termSet = new Set(snippet.terms)
    let score = 0

    for (const term of messageTerms) {
      if (termSet.has(term)) score += 2
    }

    if (snippet.title.toLowerCase().includes(normalizedMessage)) score += 4
    if (snippet.content.toLowerCase().includes(normalizedMessage)) score += 3

    return { snippet, score }
  })

  const relevant = scored
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((entry) => entry.snippet)

  if (relevant.length > 0) {
    return relevant
  }

  return snippets
    .filter((snippet) => snippet.id === "kb-company" || snippet.id === "kb-pricing" || snippet.id === "kb-use-cases")
    .slice(0, 3)
}

