import { Metadata } from "next";
import { clsx } from "clsx";
import { BgPattern } from "@/components/ui/Bgpattern";
import { SignUpButton } from "@/components/marketing/pricing/LandingSignUp";
import { CheckBoxIcon } from "@/res/icons/CheckBoxIcon";
import { PricingTableData } from "@/types";

export const metadata: Metadata = {
  title: "Pricing",
};

export default async function PricingPage() {
  const pricing: PricingTableData[]= [
    {
      planId: 'ee',
  currency: 'USD', // usd
  interval: 'monthly',// monthly
  promoted: false,
  name: 'test',
  base: 1000,
  features: ['dd', 'ddd'],
  extraUsageRate: 0
    },
    {
      planId: 'ee',
  currency: 'USD', // usd
  interval: 'monthly',// monthly
  promoted: true,
  name: 'test',
  base: 2000,
  features: ['dd', 'ddd'],
  extraUsageRate: 0
    },
    {
      planId: 'ee',
  currency: 'USD', // usd
  interval: 'monthly',// monthly
  promoted: false,
  name: 'test',
  base: 1500,
  features: ['dd', 'ddd'],
  extraUsageRate: 0
    }
  ];
  return (
    <>
      {/* Bg Pattern */}
      <BgPattern />
      {/* Hero Copy */}
      <div className="mt-16 flex flex-col items-center gap-4">
        <h1 className="md:h1 h2 w-full px-4 text-center md:w-[805px] md:px-0">
          Easy & flexible pricing
        </h1>
        <p className="body-xl w-full px-4 text-center text-slate-11 md:w-[872px] md:px-0">
        Cualquiera que sea el plan que elijas, debes saber que ofrecemos manual de uso y asesoramiento gratuito, asi como los mejores textos de marketing.
        </p>
      </div>

      {/* Pricing */}
      <div className="my-16 flex flex-col items-center">
        <div className="mx-auto flex flex-col items-start gap-6 md:flex-row">
          {pricing.map((plan, planIndex) => (
            <div
              key={planIndex}
              className={clsx(
                "flex h-[353px] flex-col gap-8 rounded-lg bg-slate-2 px-6 py-12",
                plan.promoted === true ? "border-[3px] border-6 border-purple-500" : ""
              )}
            >
              <div className="flex flex-col gap-2">
                <h6 className="body-semibold text-slate-12">{plan.name}</h6>
                <div className="flex items-center gap-3">
                  <h5 className="text-[32px] font-bold leading-9">${plan.base / 100}</h5>
                  <div className="flex flex-col items-start">
                    <span className="caption">{plan.currency.toUpperCase()}</span>
                    <span className="caption-s text-slate-11">Billed {plan.interval}</span>
                  </div>
                </div>
              </div>
              {plan.promoted ? (
                <SignUpButton type="primary">Quiero esta oferta</SignUpButton>
              ) : (
                <SignUpButton type="outline">Quiero esta oferta</SignUpButton>
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
                    <p className="body text-slate-11">{feature}</p>
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
