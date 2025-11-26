import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    const title = searchParams.get('title') || 'DONNA'
    const description = searchParams.get('description') || 'AI-Powered Business Communication'
    const type = searchParams.get('type') || 'default'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
            padding: '80px',
          }}
        >
          {/* Background gradient overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
            }}
          />

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            {/* Logo/Brand */}
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: 40,
              }}
            >
              DONNA
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 60,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 30,
                maxWidth: '900px',
                lineHeight: 1.2,
              }}
            >
              {title}
            </div>

            {/* Description */}
            {description && (
              <div
                style={{
                  fontSize: 32,
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '800px',
                  lineHeight: 1.4,
                }}
              >
                {description}
              </div>
            )}

            {/* Type badge */}
            {type !== 'default' && (
              <div
                style={{
                  marginTop: 40,
                  padding: '12px 24px',
                  background: 'rgba(6, 182, 212, 0.2)',
                  border: '2px solid rgba(6, 182, 212, 0.5)',
                  borderRadius: 9999,
                  color: '#06b6d4',
                  fontSize: 24,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                {type}
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: 60,
              display: 'flex',
              alignItems: 'center',
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: 24,
            }}
          >
            bemdonna.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('OG image generation error:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}

