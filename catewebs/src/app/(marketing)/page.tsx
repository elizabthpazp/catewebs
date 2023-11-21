import Link from "next/link";

import { BgPattern } from "@/components/ui/Bgpattern";
import { SignUpButton } from "@/components/marketing/LandingSignUp";

export default async function IndexPage() {
  return (
    <>
      {/* Bg Pattern */}
      <BgPattern />
      {/* Hero Copy */}
      <div className="mt-6 flex flex-col items-center gap-4">
        <img src="/logo.png" width={150} height={150}></img>
        <h1 className="md:display h2 w-full px-4 text-center md:w-[802px] md:px-0">
        Creamos tu <span className="text-purple-500">Propiedad digital</span>
        </h1> 
        <p className="body-xl px-4 text-center text-slate-11 md:w-[872px] md:px-0">
         Contamos con expertos en Desarrollo web, Diseño, Marketing Digital, SEO, Analítica web, entre muchos otros para impulsar tu marca. 
         </p> 
      </div>
      {/* Hero CTA */}
      <div className="mb-40 mt-20 flex flex-col items-center gap-4">
        <p>
         <span className="font-semibold h5">Contacta con nosotros</span>
        </p>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <SignUpButton className="block bg-purple-600 hover:bg-purple-500 rounded-2xl" />
        </div>
        <p className="text-slate-11">Asesoramiento gratuito</p>
      </div>
    </>
  );
}
