import React from "react";
import Footer from "@/components/Footer";
import {Header} from "@/components/marketing/Header";
import { getDictionary } from "../../../../get-dictionary";
import { Locale, i18n } from "../../../../i18n-config";
 
export default async function MarketingLayout({ children, params }: { children: React.ReactNode;  params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang) 
  return (
    <>
      <Header lang={params.lang} offertsBtn={dictionary.offertsBtn} home={dictionary.menu.home} offers={dictionary.menu.offers}/>
      <main>{children}</main>
      <Footer copy={dictionary.copy} />
    </>
  );
}
