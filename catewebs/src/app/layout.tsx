import "@/styles/globals.css";

import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { dm_sans, inter } from "@/fonts";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Tier",
    "Metered Pricing",
    "React",
    "NextJS",
    "Tailwind CSS",
    "App Router",
    "OpenAI",
    "Server Components",
  ],
  authors: [
    {
      name: "tierrun",
      url: "https://tier.run",
    },
  ],
  creator: "tierrun",
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
    images: ["/og.jpg"],
    creator: "@tierrun",
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: `${siteConfig.url}/favicons/site.webmanifest`,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dm_sans.variable}`} suppressHydrationWarning>
      <head />
      {/* Body */}
      <body className="bg-slate-1 font-sans text-slate-12">
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
