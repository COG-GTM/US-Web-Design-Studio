import type { Metadata } from "next";
import { Toaster } from "sonner";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "USWDS 4.0 Next.js Template",
  description:
    "A modern Next.js template implementing the U.S. Web Design System (USWDS) 4.0 for federal government websites.",
  keywords: [
    "USWDS",
    "U.S. Web Design System",
    "government",
    "federal",
    "accessibility",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="usa-skipnav" href="#main-content">
          Skip to main content
        </a>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            className: "usa-alert",
            duration: 5000,
          }}
        />
      </body>
    </html>
  );
}
