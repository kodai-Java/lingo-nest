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
        className={`min-h-screen bg-gray-900 text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between items-center p-5 bg-opacity-20 backdrop-blur-md">
          <div className="logo text-2xl font-bold text-blue-600">LingoNest</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-white font-medium transition-colors duration-300 hover:text-blue-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium transition-colors duration-300 hover:text-blue-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium transition-colors duration-300 hover:text-blue-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium transition-colors duration-300 hover:text-blue-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-medium transition-colors duration-300 hover:text-blue-300"
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
