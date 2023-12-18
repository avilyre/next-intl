import { useTranslations } from 'next-intl'

export default function Home() {
  const type = useTranslations("homePage");

  return (
    <main>
      <h1 className="text-3xl">{type("title")}</h1>
    </main>
  )
}
