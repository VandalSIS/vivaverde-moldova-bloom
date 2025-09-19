import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-105",
  {
    variants: {
      variant: {
        default: "bg-gradient-nature text-white hover:shadow-nature hover:brightness-110",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg",
        outline: "border-2 border-nature-green text-nature-green bg-white hover:bg-nature-green hover:text-white hover:shadow-nature",
        secondary: "bg-gradient-light text-sage-green hover:shadow-light hover:brightness-105",
        ghost: "text-nature-green hover:bg-nature-green-light hover:text-nature-green-dark",
        link: "text-nature-green underline-offset-4 hover:underline hover:text-nature-green-dark",
        hero: "bg-white text-nature-green border-2 border-white hover:bg-white/95 hover:shadow-elevated shadow-lg backdrop-blur-sm",
        "hero-outline": "border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:shadow-elevated",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 py-2",
        lg: "h-13 px-8 py-4 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
