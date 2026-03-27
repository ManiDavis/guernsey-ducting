import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SanityLive } from '@/sanity/lib/live'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Guernsey Ducting | Specialist Ducting Manufacturer, Guernsey',
  description:
    'Guernsey Ducting & Manufacturing Co Ltd – specialist ducting fabrication and ventilation solutions for residential, commercial and industrial projects across the Channel Islands.',
  keywords: [
    'ducting',
    'ductwork',
    'ventilation',
    'HVAC',
    'Guernsey',
    'Channel Islands',
    'sheet metal',
    'fabrication',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <SanityLive />
      </body>
    </html>
  )
}
