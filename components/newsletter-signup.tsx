'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import { Mail } from 'lucide-react'

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal' | 'sidebar'
}

export default function NewsletterSignup({ variant = 'inline' }: NewsletterSignupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Subscription failed')
      }

      toast.success('Successfully subscribed to our newsletter!')
      reset()
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            {...register('email')}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 text-foreground placeholder:text-foreground/50"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 rounded-lg bg-accent text-background hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium whitespace-nowrap"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    )
  }

  if (variant === 'sidebar') {
    return (
      <div className="p-4 rounded-lg border border-white/10 bg-white/5">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-5 w-5 text-accent" />
          <h3 className="font-semibold text-sm">Newsletter</h3>
        </div>
        <p className="text-xs text-foreground/70 mb-3">
          Get the latest updates and insights delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <input
            type="email"
            placeholder="Your email"
            aria-label="Email address"
            {...register('email')}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 text-foreground placeholder:text-foreground/50 text-sm"
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-lg bg-accent text-background hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    )
  }

  // Modal variant would be handled by parent component
  return null
}
