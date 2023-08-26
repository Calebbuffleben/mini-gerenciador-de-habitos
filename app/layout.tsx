import './globals.css'
import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meta diária - Gerenciador de hábitos',
  description: 'Gerenciador de hábitos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dosis.className}>{children}</body>
    </html>
  )
}
