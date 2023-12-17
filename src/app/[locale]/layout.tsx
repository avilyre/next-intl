import type { Metadata } from 'next'
import { notFound } from "next/navigation";
import { Inter } from 'next/font/google'


import './globals.css'
import { LayoutProps } from './interface'
import { locales } from '@/i18n';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Intl',
}

export default function RootLayout({ children, params: { locale } }: LayoutProps) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
