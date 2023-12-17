import { useTranslations } from 'next-intl'

export default function Home() {
  const type = useTranslations("homePage");

  return (
    <main className="bg-zinc-900 text-zinc-400 h-screen flex align-middle justify-center p-11">
      <h1 className="text-3xl">{type("title")}</h1>
    </main>
  )
}
