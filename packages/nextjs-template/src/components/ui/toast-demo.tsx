"use client";

import * as React from "react";
import { toast } from "sonner";
import { Button } from "./button";

/**
 * USWDS Toast Demo Component
 *
 * Demonstrates the Sonner toast notification system with USWDS styling.
 * Shows various toast types: success, error, warning, info, and custom.
 */
export function ToastDemo() {
  const showSuccessToast = () => {
    toast.success("Success!", {
      description: "Your action was completed successfully.",
    });
  };

  const showErrorToast = () => {
    toast.error("Error", {
      description: "An error occurred. Please try again.",
    });
  };

  const showWarningToast = () => {
    toast.warning("Warning", {
      description: "Please review this important information.",
    });
  };

  const showInfoToast = () => {
    toast.info("Information", {
      description: "Here is some helpful information for you.",
    });
  };

  const showPromiseToast = () => {
    const promise = new Promise((resolve) => setTimeout(resolve, 2000));

    toast.promise(promise, {
      loading: "Loading...",
      success: "Data loaded successfully!",
      error: "Failed to load data.",
    });
  };

  const showActionToast = () => {
    toast("Form submitted", {
      description: "Your form has been submitted for review.",
      action: {
        label: "Undo",
        onClick: () => toast.info("Undo action triggered"),
      },
    });
  };

  return (
    <div className="space-y-uswds-3">
      <h3 className="font-uswds-sans text-uswds-lg font-bold text-uswds-ink">
        Toast Notifications
      </h3>
      <p className="font-uswds-sans text-uswds-sm text-uswds-base-dark">
        Click the buttons below to see different toast notification styles
        powered by Sonner.
      </p>
      <div className="flex flex-wrap gap-uswds-2">
        <Button onClick={showSuccessToast} variant="default" size="sm">
          Success Toast
        </Button>
        <Button onClick={showErrorToast} variant="destructive" size="sm">
          Error Toast
        </Button>
        <Button onClick={showWarningToast} variant="secondary" size="sm">
          Warning Toast
        </Button>
        <Button onClick={showInfoToast} variant="outline" size="sm">
          Info Toast
        </Button>
        <Button onClick={showPromiseToast} variant="ghost" size="sm">
          Promise Toast
        </Button>
        <Button onClick={showActionToast} variant="outline" size="sm">
          Action Toast
        </Button>
      </div>
    </div>
  );
}
