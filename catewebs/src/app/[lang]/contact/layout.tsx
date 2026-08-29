import { Metadata } from "next";
import { Locale } from "../../../../i18n-config";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  return {
    title: "Contact Us | CateWebs",
    description: "Get in touch with CateWebs for your web development needs",
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
