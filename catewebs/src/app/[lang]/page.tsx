import Link from "next/link";

import { BgPattern } from "@/components/ui/Bgpattern";
import { SignUpButton } from "@/components/marketing/LandingSignUp";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { links } from "../../../links-web"; 

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: any };
}) {
  let ogimage = links.logo, sitename = links.username;
  const dictionary = await getDictionary(lang) 
  let titleMeta = dictionary.metaDescription, descriptionMeta = dictionary.metaTitle;
  return {   
    title: titleMeta,
    description: descriptionMeta,
    icons: {
      icon: links.icon,
    },
    canonical: links.domain,
    amphtml: links.domain,
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
    openGraph: { 
     images: [ogimage],
     title: titleMeta,
     description: descriptionMeta,
     url: links.domain,
     siteName: sitename,
     locale: lang == 'en' ? "en_US" : "es_ES",
     type: "website",
     link: {
      canonical: links.domain +"/"+slug, 
      amphtml: links.domain +"/"+slug,
     }  
    },
    twitter: { 
     card: "summary_large_image",
     images: [ogimage],
     title: titleMeta,
     description: descriptionMeta,
    },
    link: {
      canonical: links.domain +"/"+slug, 
      amphtml: links.domain +"/"+slug,
     }  
  };
}

export default async function IndexPage({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: any };
}) {
  const dictionary = await getDictionary(lang) 
 
  return (
    <>
      {/* Bg Pattern */}
      <BgPattern />
      {/* Hero Copy */}
      <div className="mt-6 flex flex-col items-center gap-4">
        <img src="/logo.png" alt={links.username} title={links.username} width={150} height={150}></img>
        <h1 className="md:display h2 w-full px-4 text-center md:w-[802px] md:px-0">
        {dictionary.title} <span className="text-purple-500"> {dictionary.title1}</span>
        </h1> 
        <p className="body-xl px-4 text-center text-slate-11 md:w-[872px] md:px-0">
        {dictionary.subtitle}
         </p> 
      </div>
      {/* Hero CTA */}
      <div className="mb-40 mt-20 flex flex-col items-center gap-4">
        <p>
         <span className="font-semibold h5"> {dictionary.request}</span>
        </p>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <SignUpButton title={dictionary.cta} className="block bg-purple-600 hover:bg-purple-500 rounded-2xl" />
        </div>
        <p className="text-slate-11"> {dictionary.free}</p>
      </div>
    </>
  );
}
