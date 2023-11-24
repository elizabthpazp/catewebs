import { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  title: "Pricing",
};

export default async function PricingPage({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: any };
}) {
  
  const dictionary = await getDictionary(lang) 
  
  const pricing: PricingTableData[]= [
    {
      planId: '1',
  currency: 'USD', // usd
  interval: dictionary.month,// monthly
  promoted: false,
  name: dictionary.packages.first.title,
  base: 10000,
  features: [
    dictionary.packages.first.description1, 
    dictionary.packages.first.description2,
    dictionary.packages.first.description3,
    dictionary.packages.first.description4,
    dictionary.packages.first.description5,
    dictionary.packages.first.description6,
    dictionary.packages.first.description7,
    dictionary.packages.first.description8, 
  ],
  extraUsageRate: 0
    },
    {
      planId: '2',
  currency: 'USD', // usd
  interval: dictionary.month,// monthly
  promoted: true,
  name: dictionary.packages.second.title,
  base: 25000,
  features: [
    dictionary.packages.second.description1, 
    dictionary.packages.second.description2,
    dictionary.packages.second.description3,
    dictionary.packages.second.description4,
    dictionary.packages.second.description5,
    dictionary.packages.second.description6,
    dictionary.packages.second.description7,
    dictionary.packages.second.description8,
    dictionary.packages.second.description9,
    dictionary.packages.second.description10,
    dictionary.packages.second.description11,
    dictionary.packages.second.description12,
    dictionary.packages.second.description13,
  ],
  extraUsageRate: 0
    },
    {
      planId: '3',
  currency: 'USD', // usd
  interval: dictionary.month,// monthly
  promoted: false,
  name: dictionary.packages.third.title,
  base: 50000,
  features: [
    dictionary.packages.third.description1, 
    dictionary.packages.third.description2,
    dictionary.packages.third.description3,
    dictionary.packages.third.description4,
    dictionary.packages.third.description5,
    dictionary.packages.third.description6,
    dictionary.packages.third.description7,
    dictionary.packages.third.description8,
    dictionary.packages.third.description9,
    dictionary.packages.third.description10,
    dictionary.packages.third.description11,
    dictionary.packages.third.description12,
    dictionary.packages.third.description13,
    dictionary.packages.third.description14,
  ],
  extraUsageRate: 0
    }
  ];
  return (
    <> 
      <BgPattern />
      
      <div className="mt-16 flex flex-col items-center gap-4">
        <h1 className="md:h1 h2 w-full px-4 text-center md:w-[805px] md:px-0">
        {dictionary.pricing}
        </h1>
        <p className="text-lg md:text-2xl xs:text-lg sm:text-lg w-full px-4 text-center light:text-gray-700 dark:text-white text-gray-700 md:w-[872px] md:px-0">
          {dictionary.pricingDesc}
        </p>
      </div>

      {/* Pricing */}
      <div className="my-16 flex flex-col items-center">
        <div className="mx-3 flex flex-col items-start gap-6 md:flex-row">
          {pricing.map((plan, planIndex) => (
            <div
              key={planIndex}
              className={clsx(
                "flex h-auto w-full max-w-[353px] flex-col gap-8 rounded-3xl light:bg-purple-300 dark:bg-slate-2 bg-purple-300 px-6 py-12 shadow-xl",
                plan.promoted === true ? "border-[3px] border-6 border-purple-500" : ""
              )}
            >
              <div className="flex flex-col gap-2">
                <h6 className="body-semibold light:text-gray-700 dark:text-white text-gray-700">{plan.name}</h6>
                <div className="flex items-center gap-3">
                  <h5 className="text-[32px] font-bold leading-9">${plan.base / 100}</h5>
                  <div className="flex flex-col items-start">
                    <span className="caption">{plan.currency.toUpperCase()}</span>
                    {/* <span className="caption-s text-slate-11">{dictionary.for} {plan.interval}</span> */}
                  </div>
                </div>
              </div>

              {plan.promoted ? (
                <Link href={links.telegram} className="flex flex-col w-[200px] bg-purple-600 py-1 px-2 hover:bg-purple-500 rounded-2xl text-white">{dictionary.offertsBtn}</Link>
              ) : (
                <Link href={links.telegram} className="flex flex-col w-[200px] light:bg-purple-300 dark:bg-slate-2 bg-purple-300 py-1 px-2 hover:bg-purple-500 rounded-2xl border-2 border-purple-500">{dictionary.offertsBtn}</Link>
              )}
              <div className="flex flex-col gap-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckBoxIcon
                      className={clsx(
                        "h-6 w-6 ",
                        plan.promoted ? "stroke-9 stroke-purple-500" : "stroke-slate-11"
                      )}
                    />
                    <p className="body light:text-gray-700 dark:text-white text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
