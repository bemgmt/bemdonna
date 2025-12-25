'use client'

import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'

const COOKIE_CONSENT_KEY = 'donna-cookie-consent'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      setShowBanner(true)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(allAccepted))
    setPreferences(allAccepted)
    setShowBanner(false)
    // Initialize analytics if accepted
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      })
    }
  }

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(onlyEssential))
    setPreferences(onlyEssential)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences))
    setShowBanner(false)
    setShowCustomize(false)
    // Update analytics consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied',
        ad_storage: preferences.marketing ? 'granted' : 'denied',
      })
    }
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto glass-card border border-white/10 rounded-lg p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <Cookie className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Cookie Preferences</h3>
            <p className="text-sm text-foreground/70 mb-4">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking &quot;Accept All&quot;, you consent to our use of cookies.{' '}
              <Link href="/privacy" className="text-accent hover:underline">
                Learn more
              </Link>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-lg bg-accent text-background hover:bg-accent/90 transition-colors text-sm font-medium"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium"
              >
                Reject All
              </button>
              <Dialog.Root open={showCustomize} onOpenChange={setShowCustomize}>
                <Dialog.Trigger asChild>
                  <button className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">
                    Customize
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
                  <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50 glass-card border border-white/10 rounded-lg shadow-xl p-6">
                    <Dialog.Title className="text-xl font-semibold mb-4">
                      Cookie Preferences
                    </Dialog.Title>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between p-4 rounded-lg border border-white/10">
                        <div>
                          <div className="font-medium">Essential Cookies</div>
                          <div className="text-sm text-foreground/70">
                            Required for the site to function properly
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.essential}
                          disabled
                          className="w-5 h-5 rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg border border-white/10">
                        <div>
                          <div className="font-medium">Analytics Cookies</div>
                          <div className="text-sm text-foreground/70">
                            Help us understand how visitors interact with our site
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) =>
                            setPreferences({ ...preferences, analytics: e.target.checked })
                          }
                          className="w-5 h-5 rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg border border-white/10">
                        <div>
                          <div className="font-medium">Marketing Cookies</div>
                          <div className="text-sm text-foreground/70">
                            Used to deliver personalized ads
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) =>
                            setPreferences({ ...preferences, marketing: e.target.checked })
                          }
                          className="w-5 h-5 rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg border border-white/10">
                        <div>
                          <div className="font-medium">Preference Cookies</div>
                          <div className="text-sm text-foreground/70">
                            Remember your settings and preferences
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.preferences}
                          onChange={(e) =>
                            setPreferences({ ...preferences, preferences: e.target.checked })
                          }
                          className="w-5 h-5 rounded"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <button
                        onClick={() => setShowCustomize(false)}
                        className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSavePreferences}
                        className="px-4 py-2 rounded-lg bg-accent text-background hover:bg-accent/90 transition-colors"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
