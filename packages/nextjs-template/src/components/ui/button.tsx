"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * USWDS Button Component
 *
 * A button component that follows USWDS design guidelines while leveraging
 * Radix UI's Slot primitive for composition and Tailwind CSS for styling.
 *
 * @see https://designsystem.digital.gov/components/button/
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-uswds-md font-uswds-sans text-uswds-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-uswds-primary text-white hover:bg-uswds-primary-dark focus-visible:outline-uswds-primary",
        secondary:
          "bg-uswds-secondary text-white hover:bg-uswds-secondary-dark focus-visible:outline-uswds-secondary",
        outline:
          "border-2 border-uswds-primary bg-transparent text-uswds-primary hover:border-uswds-primary-dark hover:text-uswds-primary-dark focus-visible:outline-uswds-primary",
        ghost:
          "bg-transparent text-uswds-primary hover:bg-uswds-primary-lightest focus-visible:outline-uswds-primary",
        link: "text-uswds-primary underline-offset-4 hover:underline focus-visible:outline-uswds-primary",
        destructive:
          "bg-uswds-error text-white hover:bg-uswds-error-dark focus-visible:outline-uswds-error",
      },
      size: {
        default: "h-10 px-uswds-3 py-uswds-105",
        sm: "h-8 px-uswds-2 py-uswds-1 text-uswds-xs",
        lg: "h-12 px-uswds-4 py-uswds-2 text-uswds-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
