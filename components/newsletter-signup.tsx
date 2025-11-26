'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to receive emails',
  }),
})

type FormData = z.infer<typeof schema>

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal' | 'sidebar'
}

export function NewsletterSignup({ variant = 'inline' }: NewsletterSignupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // TODO: Integrate with email marketing service (Mailchimp, ConvertKit, etc.)
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success('Successfully subscribed to newsletter!')
        reset()
      } else {
        throw new Error('Subscription failed')
      }
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={variant === 'sidebar' ? 'space-y-4' : 'space-y-4'}>
      <div>
        <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Get the latest updates, tips, and insights delivered to your inbox.
        </p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="consent" {...register('consent')} />
          <label
            htmlFor="consent"
            className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to receive emails from DONNA. You can unsubscribe at any time.
          </label>
        </div>
        {errors.consent && (
          <p className="text-sm text-destructive">{errors.consent.message}</p>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Subscribe
        </Button>
      </form>
    </div>
  )
}

