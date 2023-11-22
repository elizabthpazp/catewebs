import "@/styles/globals.css";

import { Metadata } from "next";
import { i18n, Locale } from '../../../i18n-config'
import { siteConfig } from "@/config/site";
import { dm_sans, inter } from "@/fonts"; 
import {Header} from "@/components/marketing/Header";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import { getDictionary } from "../../../get-dictionary";
import { links } from "../../../links-web";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
} 

export const metadata: Metadata = {  
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "catewebs",
    "web development",
    "desarrollo web",
    "diseño web",
    "marketing digital",
    "seo",
    "elizabthpazp",
    "development",
    "website",
  ],
  authors: [
    {
      name: links.username,
      url: "https://github.com/elizabthpazp/catewebs",
    },
  ],
  creator: links.username,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [links.logo],
    creator: links.username,
  },
  icons: {
    icon: links.icon,
    shortcut: links.logo,
    apple: links.logo,
  },
  manifest: `${siteConfig.url}/favicons/site.webmanifest`,
};

export default async function RootLayout({ children, params }: { children: React.ReactNode;  params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang) 
  return (
    <html lang={params.lang} className={`${inter.variable} ${dm_sans.variable}`} suppressHydrationWarning>
      
      <body className="font-sans text-slate-12 light:bg-[#4D4D4D] light:text-black dark:bg-slate-1 dark:text-white">
      <Providers>
        <Header lang={params.lang} offertsBtn={dictionary.offertsBtn} home={dictionary.menu.home} offers={dictionary.menu.offers} />
        {children}
        <Footer copy={dictionary.copy} />
      </Providers>
      </body>
    </html>
  );
}
