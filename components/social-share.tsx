'use client'

import { Button } from '@/components/ui/button'
import { Facebook, Linkedin, Twitter, Mail, Link as LinkIcon } from 'lucide-react'
import { toast } from 'sonner'

interface SocialShareProps {
  url: string
  title: string
  description?: string
  variant?: 'icons' | 'buttons'
}

export function SocialShare({ url, title, description, variant = 'icons' }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || '')

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      toast.success('Link copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy link')
    }
  }

  const handleShare = async (platform: string) => {
    // Use Web Share API on mobile if available
    if (navigator.share && /mobile/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
        return
      } catch (error) {
        // Fall back to opening share link
      }
    }

    // Open share link in new window
    if (platform !== 'copy') {
      window.open(shareLinks[platform as keyof typeof shareLinks], '_blank', 'width=600,height=400')
    }
  }

  if (variant === 'icons') {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Share:</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => handleShare('twitter')}
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => handleShare('linkedin')}
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => handleShare('facebook')}
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => handleShare('email')}
          aria-label="Share via Email"
        >
          <Mail className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={copyToClipboard}
          aria-label="Copy link"
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline" onClick={() => handleShare('twitter')} className="justify-start">
        <Twitter className="mr-2 h-4 w-4" />
        Share on Twitter
      </Button>
      <Button variant="outline" onClick={() => handleShare('linkedin')} className="justify-start">
        <Linkedin className="mr-2 h-4 w-4" />
        Share on LinkedIn
      </Button>
      <Button variant="outline" onClick={() => handleShare('facebook')} className="justify-start">
        <Facebook className="mr-2 h-4 w-4" />
        Share on Facebook
      </Button>
      <Button variant="outline" onClick={() => handleShare('email')} className="justify-start">
        <Mail className="mr-2 h-4 w-4" />
        Share via Email
      </Button>
      <Button variant="outline" onClick={copyToClipboard} className="justify-start">
        <LinkIcon className="mr-2 h-4 w-4" />
        Copy Link
      </Button>
    </div>
  )
}

