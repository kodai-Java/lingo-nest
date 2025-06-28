import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lingo Nest',
  description: '言語の巣',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`min-h-screen bg-white text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between items-center p-5 bg-opacity-20 backdrop-blur-md mx-auto max-w-6xl">
          <a href="/" className="logo text-2xl font-bold text-blue-600">
            LingoNest
          </a>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="text-blue-600 font-medium transition-colors duration-300 hover:text-blue-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/transtory/"
                  className="text-blue-600 font-medium transition-colors duration-300 hover:text-blue-300"
                >
                  Transtory
                </a>
              </li>
              <li>
                <a
                  href="/lincard/"
                  className="text-blue-600 font-medium transition-colors duration-300 hover:text-blue-300"
                >
                  Lincard
                </a>
              </li>
              <li>
                <a
                  href="/api/auth/signin"
                  className="text-blue-600 font-medium transition-colors duration-300 hover:text-blue-300"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
