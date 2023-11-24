import { Metadata, Viewport } from "next";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import { clsx } from "clsx";

import { PricingTableData } from "@/types";
import { BgPattern } from "@/components/Bgpattern";
import { CheckBoxIcon } from "@/res/icons/CheckBoxIcon";

import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import { links } from "../../../../links-web";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Services",
};

export default async function ServicesPage({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: any };
}) {
  const dictionary = await getDictionary(lang);

  const servicesList = [
    {
      title: dictionary.services.first.title,
      description: dictionary.services.first.description,
      image: links.desarrolloweb,
    },
    {
      title: dictionary.services.second.title,
      description: dictionary.services.second.description,
      image: links.marketing,
    },
    {
      title: dictionary.services.third.title,
      description: dictionary.services.third.description,
      image: links.seo,
    },
    {
      title: dictionary.services.four.title,
      description: dictionary.services.four.description,
      image: links.disenno,
    },
    {
      title: dictionary.services.five.title,
      description: dictionary.services.five.description,
      image: links.tiendaOnline,
    },
    {
      title: dictionary.services.six.title,
      description: dictionary.services.six.description,
      image: links.sistemas,
    },
  ];

  return (
    <>
      <BgPattern />

      <div className="mt-16 mb-16 flex flex-col items-center">
        <h1 className="md:h1 h2 w-full px-4 text-center md:w-[905px] md:px-0">
          {dictionary.servicesTitle}
        </h1>
        <p className="text-lg mt-2 md:text-2xl xs:text-lg sm:text-lg w-full px-4 text-center light:text-gray-700 dark:text-white text-gray-700 md:w-[872px] md:px-0">
          {dictionary.servicesDescript}
        </p>
      </div>
      <div className="justify-center mx-0 sm:mx-0 xs:mx-0 md:mx-12">
        <div className="mb-20 columns-1 md:columns-3 sm:columns-1 xs:columns-1 justify-center mt-6 mx-0">
          {servicesList.map((service, index) => (
            <div key={index} className="gap-3 w-full">
              <div className="relative w-100 mx-4 min-h-fit justify-center flex flex-col mt-6 text-gray-700 shadow-xl rounded-xl bg-clip-border light:bg-purple-300 dark:bg-slate-2 bg-purple-300 light:text-gray-700 dark:text-white text-gray-700 border-2 border-purple-600">
                <div className="p-6 gap-4 mb-3 flex flex-row justify-center">
                  <div className="mb-2">
                    <img className="rounded-full min-w-[100px]" src={service.image} alt={service.title} title={service.title} width={100} height={100}></img>
                  </div>
                  <div className="mt-2">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                    {service.title}
                  </h5>
                  <p className="block font-sans light:text-gray-700 dark:text-gray-300 text-gray-700 antialiased font-semibold leading-relaxed">
                    {service.description}
                  </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
