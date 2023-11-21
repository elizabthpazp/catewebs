"use client";

import type { VariantProps } from "cva";
import { signIn } from "next-auth/react";

import { Button, buttonVariants } from "@/components/ui/Button";

export function SignUpButton({
  type,
  children,
}: {
  type: VariantProps<typeof buttonVariants>["variant"];
  children: React.ReactNode;
}) {
  async function handleGithub() {
    signIn("github", { callbackUrl: "/billing" });
  }

  return (
    <Button
      type="button"
      variant={type}
      className={type=='primary'?'bg-purple-500 hover:bg-purple-400 w-[256px] rounded-2xl':"text-purple-500 w-[256px] rounded-2xl"}
      onClick={() => {
        handleGithub();
      }}
    >
      {children}
    </Button>
  );
}
