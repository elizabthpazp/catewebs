import { Metadata, Viewport } from "next";
import Image from "next/image";
import { clsx } from "clsx";
import { BgPattern } from "@/components/Bgpattern"; 
import { CheckBoxIcon } from "@/res/icons/CheckBoxIcon";
import { PricingTableData } from "@/types";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import { Button, Link } from "@nextui-org/react";
import { links } from "../../../../links-web";

export const viewport: Viewport = { 
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: any };
}) {
  let sitename = links.username;
  const dictionary = await getDictionary(lang);
  return { 
    title: dictionary.aboutTitle + " | " + dictionary.metaDescription,
    description: dictionary.aboutTitle,
    icons: {
      icon: links.icon,
    },
    canonical: links.domain + "/about",
    amphtml: links.domain + "/about",
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
      dictionary.aboutTitle
    ],
    openGraph: { 
      images: [links.logo],
      title: dictionary.aboutTitle,
      description: dictionary.aboutTitle,
      url: links.domain + "/about",
      siteName: sitename,
      locale: lang == "en" ? "en_US" : "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: [links.logo],
      title: dictionary.aboutTitle,
      description: dictionary.aboutTitle, 
    },
    link: {
      canonical: links.domain + "/about",
      amphtml: links.domain + "/about",
    },
  };
}

export default async function AboutPage({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: any };
}) {
  
  const dictionary = await getDictionary(lang) 
   
  return (
    <> 
      <BgPattern />
      
      <div className="mt-16 mb-9 flex flex-col items-center">
        <h1 className="md:h1 h2 w-full px-4 text-center md:w-[905px] md:px-0">
        {dictionary.aboutTitle}
        </h1>
        <p className="text-lg mt-2 md:text-2xl xs:text-lg sm:text-lg w-full px-4 text-center light:text-gray-700 dark:text-white text-gray-700 md:w-[872px] md:px-0">
          {dictionary.aboutSub}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
      <div className="mb-20 max-w-[950px] gap-10 flex flex-col sm:flex-col xs:flex-col md:flex-row justify-center mt-6 text-center sm:text-center xs:text-center md:text-start mx-5">
        <div className="flex flex-col items-center">
         <Image src={links.logo} alt={links.username} title={links.username} width={200} height={200}></Image>
         <span className="font-semibold h3 pt-1 light:text-gray-600 dark:text-gray-500">CateWebs</span>
        </div>
        <div className="flex flex-col"> 
         <p className="font-semibold pt-2 text-lg light:text-gray-600 dark:text-gray-300">{dictionary.aboutDescription1}</p>
         <p className="font-semibold pt-3 text-lg light:text-gray-600 dark:text-gray-300">{dictionary.aboutDescription2}</p> 
         <p className="font-semibold pt-3 text-lg light:text-gray-600 dark:text-gray-300">{dictionary.aboutDescription4}</p>
         <p className="font-semibold pt-3 text-lg light:text-gray-600 dark:text-gray-300">{dictionary.aboutDescription5}</p>
         <p className="font-semibold pt-3 text-lg light:text-gray-600 dark:text-gray-300">{dictionary.aboutDescription6}</p>
         <p className="font-semibold pt-3 text-lg light:text-gray-600 dark:text-gray-300">{dictionary.aboutDescription7}</p>
        </div>
      </div>
      </div>
 
    </>
  );
}
