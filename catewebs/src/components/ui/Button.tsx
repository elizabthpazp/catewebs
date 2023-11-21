import React, { ComponentProps } from "react";
import Link from "next/link";
import { cva, VariantProps } from "cva";

import { cn } from "@/utils";

// https://cva.style/docs
export const buttonVariants = cva(
  "inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition",
  {
    variants: {
      variant: {
        primary: "rounded-[4px] py-1 px-3 text-white hover:bg-crimson-10",
        secondary:
          "rounded-[4px] py-1 px-3 text-crimson-11 hover:bg-crimson-4 ring-1 ring-inset ring-crimson-6",
        outline:
          "rounded-[4px] py-1 px-3 bg-slate-2 ring-1 ring-inset ring-slate-6 text-slate-11 hover:bg-slate-3 hover:text-slate-12",
        text: "hover:text-crimson-10",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;

export interface ButtonProps extends ButtonOrLinkProps, VariantProps<typeof buttonVariants> {}

export const Button = ({ variant, className, children, ...props }: ButtonProps) => {
  let Component: any = props.href ? Link : "button";

  return (
    <Component className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </Component>
  );
};
