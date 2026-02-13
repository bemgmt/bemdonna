"use client"

import { useState, useRef, useEffect } from "react"
import { Send, X, MessageCircle, Loader2 } from "lucide-react"
import Image from "next/image"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm Donna, your AI operations operator. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const suggestedPrompts = [
    "How does DONNA join meetings?",
    "What makes DONNA different from other AI tools?",
    "What are your pricing plans?"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Call the chatbot API
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim(), history: messages }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chatbot error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I'm having trouble responding right now. Please try again or contact us at derek@bem.studio.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 chat-pulse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Open chat"
        >
          <MessageCircle className="w-8 h-8 text-background" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)] flex flex-col glass-card rounded-2xl shadow-2xl border border-accent/20 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent to-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                <Image src="/DONNA-logo.png" alt="Donna" width={24} height={24} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-background">Donna</h3>
                <p className="text-xs text-background/80">Operational Intelligence Layer</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-background/80 hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background rounded-md"
              aria-label="Close chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/95">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === "user"
                      ? "bg-accent text-background"
                      : "bg-white/5 text-foreground border border-white/10"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 text-foreground border border-white/10 rounded-2xl px-4 py-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              </div>
            )}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-2">
                <p className="text-xs text-foreground/60 mb-2">Try asking:</p>
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={async () => {
                      const userMessage: Message = {
                        id: Date.now().toString(),
                        role: "user",
                        content: prompt,
                        timestamp: new Date(),
                      }
                      setMessages((prev) => [...prev, userMessage])
                      setIsLoading(true)

                      try {
                        const response = await fetch("/api/chatbot", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ message: prompt, history: messages }),
                        })

                        if (!response.ok) throw new Error("Failed to get response")

                        const data = await response.json()

                        const assistantMessage: Message = {
                          id: (Date.now() + 1).toString(),
                          role: "assistant",
                          content: data.message,
                          timestamp: new Date(),
                        }

                        setMessages((prev) => [...prev, assistantMessage])
                      } catch (error) {
                        console.error("Chatbot error:", error)
                        const errorMessage: Message = {
                          id: (Date.now() + 1).toString(),
                          role: "assistant",
                          content: "I apologize, but I'm having trouble responding right now. Please try again or contact us at derek@bem.studio.",
                          timestamp: new Date(),
                        }
                        setMessages((prev) => [...prev, errorMessage])
                      } finally {
                        setIsLoading(false)
                      }
                    }}
                    className="w-full text-left px-3 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-background/95">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 transition-colors text-foreground placeholder:text-foreground/40 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="px-4 py-2 rounded-lg bg-accent text-background hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-foreground/40 mt-2 text-center">
              Powered by Bird's Eye Management Services
            </p>
          </div>
        </div>
      )}
    </>
  )
}

