"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * USWDS Alert Component
 *
 * An alert component that follows USWDS design guidelines for displaying
 * informational, success, warning, and error messages.
 *
 * @see https://designsystem.digital.gov/components/alert/
 */
const alertVariants = cva(
  "relative w-full rounded-uswds-md border-l-4 p-uswds-3 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "border-uswds-base bg-uswds-base-lightest text-uswds-ink",
        info: "border-uswds-info bg-uswds-info-lighter text-uswds-ink",
        success: "border-uswds-success bg-uswds-success-lighter text-uswds-ink",
        warning: "border-uswds-warning bg-uswds-warning-lighter text-uswds-ink",
        error: "border-uswds-error bg-uswds-error-lighter text-uswds-ink",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-uswds-1 font-uswds-sans text-uswds-md font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-uswds-sans text-uswds-sm [&_p]:leading-relaxed",
      className
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
