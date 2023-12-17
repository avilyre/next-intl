import { getRequestConfig } from "next-intl/server";

export const locales = [
  "en-us",
  "pt-br"
]

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./translations/${locale}.json`)).default
}));