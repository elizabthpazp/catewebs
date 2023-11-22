"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/Button";

export function SignUpButton({ className, title }: { className: string, title: string }) {
 
  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
      <Button
        type="button"
        variant="primary"
        className={className}
      
      >
       {title}
      </Button>
    </div>
  );
}
