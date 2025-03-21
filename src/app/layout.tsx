import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/shared/providers/ThemeProvider'
import { LoadingProvider } from '@/shared/providers/LoadingProvider'
import { Sidebar } from '@/shared/components/sidebar/Sidebar'
import { LanguageProvider } from '@/shared/contexts/LanguageContext'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  display: 'swap',
  fallback: ['sans-serif'],
})

export const metadata: Metadata = {
  title: 'Davi Ximendes | Portfolio',
  description: 'Hello world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <LoadingProvider>
              <Sidebar />
              <main className="flex flex-col w-full items-center gap-12 flex-1 p-4 overflow-y-auto">
                <div className="w-full max-w-[1500px]">{children}</div>
              </main>
            </LoadingProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
