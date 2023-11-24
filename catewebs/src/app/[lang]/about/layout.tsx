import React from "react";  
import { Locale, i18n } from "../../../../i18n-config"; 
 
export default async function AboutLayout({ children, params }: { children: React.ReactNode;  params: { lang: Locale } }) {
  return (
    <>
      <main>{children}</main>  
    </>
  );
}
