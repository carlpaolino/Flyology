import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Flyology - Georgia Tech Outdoor Recreation',
  description: 'Experience the best fly-fishing, conventional fishing, and boating adventures with Flyology. Georgia Tech\'s premier outdoor recreation company.',
  keywords: 'fly fishing, fishing, boating, outdoor recreation, Georgia Tech, Atlanta, adventures, excursions',
  authors: [{ name: 'Flyology Team' }],
  creator: 'Flyology',
  publisher: 'Flyology',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://flyology.com'),
  openGraph: {
    title: 'Flyology - Georgia Tech Outdoor Recreation',
    description: 'Experience the best fly-fishing, conventional fishing, and boating adventures with Flyology.',
    url: '/',
    siteName: 'Flyology',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flyology - Outdoor Recreation Adventures',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flyology - Georgia Tech Outdoor Recreation',
    description: 'Experience the best fly-fishing, conventional fishing, and boating adventures with Flyology.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1B5E20',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
} 