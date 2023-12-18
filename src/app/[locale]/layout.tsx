import type { Metadata } from 'next'
import { notFound } from "next/navigation";
import { Inter } from 'next/font/google'


import './globals.css'
import { LayoutProps } from './interface'
import { locales } from '@/i18n';
import { Link } from '@/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Intl',
}

export default function RootLayout({ children, params: { locale } }: LayoutProps) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-zinc-800 text-zinc-400 flex items-center justify-center gap-3 p-4">
          <Link className="py-4 px-6 bg-slate-700 rounded-md" href="/" locale="pt-br">PT-BR</Link>
          <Link className="py-4 px-6 bg-slate-700 rounded-md" href="/" locale="en-us">EN-US</Link>
          <Link className="py-4 px-6 bg-slate-700 rounded-md" href="/about">Page: About</Link>
        </nav>
        <main className="bg-zinc-900 text-zinc-400 h-screen flex align-center justify-center p-11">
          {children}
        </main>
      </body>
    </html>
  )
}
