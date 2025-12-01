import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToastDemo } from "@/components/ui/toast-demo";

export default function Home() {
  return (
    <main id="main-content" className="usa-section">
      <div className="usa-container">
        <header className="mb-uswds-6">
          <h1 className="text-uswds-3xl font-bold text-uswds-ink">
            USWDS 4.0 Next.js Template
          </h1>
          <p className="mt-uswds-2 text-uswds-lg text-uswds-base-dark">
            A modern reference implementation of the U.S. Web Design System
            using Next.js, Tailwind CSS, and Radix UI.
          </p>
        </header>

        <section className="mb-uswds-6">
          <h2 className="mb-uswds-3 text-uswds-2xl font-bold">
            Getting Started
          </h2>
          <Alert variant="info" className="mb-uswds-3">
            <AlertTitle>Welcome to USWDS 4.0</AlertTitle>
            <AlertDescription>
              This template demonstrates how to integrate USWDS design tokens
              with modern React patterns using Next.js App Router, Tailwind CSS,
              and accessible Radix UI primitives.
            </AlertDescription>
          </Alert>
        </section>

        <section className="mb-uswds-6">
          <h2 className="mb-uswds-3 text-uswds-2xl font-bold">
            Button Examples
          </h2>
          <div className="flex flex-wrap gap-uswds-2">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button disabled>Disabled Button</Button>
          </div>
        </section>

        <section className="mb-uswds-6">
          <h2 className="mb-uswds-3 text-uswds-2xl font-bold">Alert Examples</h2>
          <div className="space-y-uswds-2">
            <Alert variant="info">
              <AlertTitle>Informational Alert</AlertTitle>
              <AlertDescription>
                This is an informational message using USWDS styling.
              </AlertDescription>
            </Alert>
            <Alert variant="success">
              <AlertTitle>Success Alert</AlertTitle>
              <AlertDescription>
                Your action was completed successfully.
              </AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTitle>Warning Alert</AlertTitle>
              <AlertDescription>
                Please review this important information.
              </AlertDescription>
            </Alert>
            <Alert variant="error">
              <AlertTitle>Error Alert</AlertTitle>
              <AlertDescription>
                An error occurred. Please try again.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <section className="mb-uswds-6">
          <h2 className="mb-uswds-3 text-uswds-2xl font-bold">
            Accordion Example
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is USWDS?</AccordionTrigger>
              <AccordionContent>
                The U.S. Web Design System (USWDS) is a design system for the
                federal government. It provides a library of open source UI
                components and a visual style guide for U.S. federal government
                websites.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why use this template?</AccordionTrigger>
              <AccordionContent>
                This template provides a modern Next.js implementation of USWDS,
                combining the design system&apos;s accessibility and visual
                standards with modern React patterns, Tailwind CSS utilities,
                and Radix UI primitives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is this template accessible?</AccordionTrigger>
              <AccordionContent>
                Yes! This template is built with accessibility as a core
                requirement. It uses Radix UI primitives which provide built-in
                accessibility features, and follows WCAG 2.0 AA and Section 508
                compliance guidelines.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-uswds-6">
          <h2 className="mb-uswds-3 text-uswds-2xl font-bold">Dialog Example</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Action</DialogTitle>
                <DialogDescription>
                  This is a USWDS-styled dialog built with Radix UI. It includes
                  proper focus management, keyboard navigation, and screen
                  reader support.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>

        <section className="mb-uswds-6">
          <h2 className="mb-uswds-3 text-uswds-2xl font-bold">Tabs Example</h2>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="rounded-uswds-md border border-uswds-base-lighter p-uswds-3">
                <h3 className="mb-uswds-2 font-uswds-sans text-uswds-lg font-bold">
                  Overview
                </h3>
                <p className="font-uswds-sans text-uswds-sm text-uswds-base-dark">
                  USWDS 4.0 introduces a modern Next.js template that enables
                  government agencies to build accessible, performant web
                  applications using contemporary frontend technologies.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="features">
              <div className="rounded-uswds-md border border-uswds-base-lighter p-uswds-3">
                <h3 className="mb-uswds-2 font-uswds-sans text-uswds-lg font-bold">
                  Features
                </h3>
                <ul className="list-inside list-disc space-y-uswds-1 font-uswds-sans text-uswds-sm text-uswds-base-dark">
                  <li>Next.js 14+ with App Router</li>
                  <li>Tailwind CSS with USWDS design tokens</li>
                  <li>Radix UI accessible primitives</li>
                  <li>Sonner toast notifications</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="documentation">
              <div className="rounded-uswds-md border border-uswds-base-lighter p-uswds-3">
                <h3 className="mb-uswds-2 font-uswds-sans text-uswds-lg font-bold">
                  Documentation
                </h3>
                <p className="font-uswds-sans text-uswds-sm text-uswds-base-dark">
                  Visit the USWDS documentation at designsystem.digital.gov for
                  comprehensive guides, component references, and best
                  practices.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-uswds-6">
          <h2 className="mb-uswds-3 text-uswds-2xl font-bold">
            Toast Notifications
          </h2>
          <ToastDemo />
        </section>

        <section>
          <h2 className="mb-uswds-3 text-uswds-2xl font-bold">Features</h2>
          <ul className="list-inside list-disc space-y-uswds-1 text-uswds-base-dark">
            <li>Next.js 14+ with App Router</li>
            <li>Tailwind CSS with USWDS design tokens</li>
            <li>Radix UI accessible component primitives</li>
            <li>Sonner toast notifications</li>
            <li>TypeScript for type safety</li>
            <li>WCAG 2.0 AA compliant</li>
            <li>Section 508 compliant</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
