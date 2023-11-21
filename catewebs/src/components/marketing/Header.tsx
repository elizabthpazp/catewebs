"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import { SocialMedia } from "@/components/ui/SocialMedia";
import { SignInButton } from "@/components/marketing/LandingSignIn";
import { SignUpButton } from "@/components/marketing/LandingSignUp"; 

const navigation = [
  { name: "Home", href: "/" },
  { name: "Ofertas", href: "/pricing" },
];

export function Header({ stargazers_count }: { stargazers_count: number }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  let pathname = usePathname();

  return (
    <header className="border-b border-slate-6 bg-slate-1/5 py-3 backdrop-blur-lg lg:py-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-4 lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">CateWebs</span>
            <div className="flex gap-2">
              <img className="pt-1 pb-1" src="/logo.png" width={50} height={50}></img>
              <span className="body-semibold pt-5">CateWebs</span>
            </div>
          </Link> 
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-11"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "body py-3 text-slate-11 border-violet-500",
                pathname === item.href ? "border-b border-crimson-9" : ""
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-5">
        <SocialMedia count={stargazers_count} /> 
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-1 p-6 sm:max-w-sm sm:ring-1 sm:ring-slate-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">CateWebs</span>
              <div className="flex gap-2">
              <img className="pt-1 pb-1" src="/logo.png" width={50} height={50}></img>
                <span className="body-semibold pt-4">CateWebs</span>
              </div>
            </Link>
            <SocialMedia count={stargazers_count} />
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-11 hover:bg-slate-3"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 py-6"> 
                <SignUpButton className="w-100 bg-purple-600 hover:bg-purple-500 rounded-2xl" />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}