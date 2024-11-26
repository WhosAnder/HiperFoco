import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navbar from './components/Navbar'
import MusicPlayer from './components/MusicPlayer'
import { ThemeProvider } from './components/ThemeProvider'
import { ThemeToggle } from './components/ThemeToggle'
import ClientWrapper from './components/ClientWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HiperFoco',
  description: 'Una aplicación de productividad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
              <header className="bg-[#ff4757] text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                  <MusicPlayer />
                  <Link href="/welcome" className="text-2xl font-bold hover:text-white/90 transition-colors">
                    HiperFoco
                  </Link>
                  <ThemeToggle />
                </div>
              </header>
              <Navbar />
              <main className="flex-grow container mx-auto p-4">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </ClientWrapper>
      </body>
    </html>
  )
}

