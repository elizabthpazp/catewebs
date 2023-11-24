import { Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { BgPattern } from "@/components/Bgpattern";
import { Card } from "@/components/Card";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { links } from "../../../links-web";
import { Instagram } from "@/components/Instagram";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: any };
}) {
  let ogimage = links.logo,
    sitename = links.username;
  const dictionary = await getDictionary(lang);
  let titleMeta = dictionary.metaDescription,
    descriptionMeta = dictionary.metaTitle;
  return {
    title: titleMeta,
    description: descriptionMeta,
    icons: {
      icon: links.icon,
    },
    canonical: links.domain + "/es",
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
      locale: lang == "en" ? "en_US" : "es_ES",
      type: "website",
      link: {
        canonical: links.domain + "/" + slug,
        amphtml: links.domain + "/" + slug,
      },
    },
    twitter: {
      card: "summary_large_image",
      images: [ogimage],
      title: titleMeta,
      description: descriptionMeta,
    },
    link: {
      canonical: links.domain + "/" + slug,
      amphtml: links.domain + "/" + slug,
    },
  };
} 

export default async function IndexPage({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: any };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <BgPattern />
      <div className="mt-6 flex flex-col items-center gap-4">
        <Image
          src={links.logo}
          alt={links.username}
          title={links.username}
          width={150}
          height={150}
        />
        <div className="md:display h2 w-full px-4 text-center md:w-[802px] md:px-0">
          <h1 className="light:text-gray-800 dark:text-white text-gray-800"> {dictionary.title}</h1>
          <h1 className="light:text-purple-600 dark:text-purple-500 text-purple-500">
            {" "}
            {dictionary.title1}
          </h1>
        </div>
        <p className="text-lg md:text-2xl xs:text-lg sm:text-lg px-4 text-center md:w-[872px] md:px-0 light:text-gray-700 dark:text-white text-gray-700">
          {dictionary.subtitle}
        </p>
      </div>

      <div className="mb-10 mt-20 flex flex-col items-center gap-4">
        <p>
          <span className="font-semibold h5"> {dictionary.request}</span>
        </p>
        <div className="flex text-center flex-col items-center gap-2 md:flex-row md:gap-4">
          <Link
            href={links.telegram}
            className="w-[200px] bg-purple-600 py-3 px-5 block h5 hover:bg-purple-500 rounded-2xl text-white"
          >
            {dictionary.cta}
          </Link>
        </div>
        <p className="light:text-gray-800 dark:text-gray-300 text-gray-800"> {dictionary.free}</p>
      </div>

      <div className="mb-20 flex flex-col items-center sm:flex-col xs:flex-col md:flex-row text-center justify-center">
        <Card
          title={dictionary.cards.first.title}
          description={dictionary.cards.first.description}
          icon={"buy"}
        ></Card>
        <Card
          title={dictionary.cards.second.title}
          description={dictionary.cards.second.description}
          icon={"regard"}
        ></Card>
        <Card
          title={dictionary.cards.third.title}
          description={dictionary.cards.third.description}
          icon={""}
        ></Card>
      </div>

      <div className="pt-10 justify-center w-full text-center"> 
        <div className="mt-6 mb-16 flex flex-col items-center gap-4">
        <h1 className="md:h1 h2 w-full px-4 text-center md:w-[805px] md:px-0">
         {dictionary.instagram}
        </h1>
        <p className="text-lg md:text-2xl xs:text-lg sm:text-lg w-full px-4 text-center light:text-gray-700 dark:text-white text-gray-700 md:w-[872px] md:px-0">
          {dictionary.instagramDesc}
        </p>
        </div>
        
        <Instagram></Instagram>

        <div className="mb-40 pt-40 flex flex-col items-center justify-center w-full text-center">  
        <h1 className="md:h1 h2 w-full px-4 text-center md:w-[805px] md:px-0 light:text-purple-600 dark:text-purple-500 text-purple-500">
         {dictionary.finalPhrase}
        </h1> 
        <div className="flex gap-16 flex-col items-center sm:flex-col xs:flex-col md:flex-row text-center justify-center">
        <Image className="rounded-full mt-16"
          src={links.sistemas}
          alt={links.username}
          title={links.username}
          width={250}
          height={250}
        />
        <Image className="rounded-full mt-16"
          src={links.desarrolloweb}
          alt={links.username}
          title={links.username}
          width={250}
          height={250}
        />
        <Image className="rounded-full mt-16"
          src={links.marketing}
          alt={links.username}
          title={links.username}
          width={250}
          height={250}
        />
        </div>
        </div>
        
      </div>
    </>
  );
}
