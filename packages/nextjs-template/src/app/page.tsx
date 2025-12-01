import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
