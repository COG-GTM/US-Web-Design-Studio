# @uswds/nextjs-template

A modern Next.js template implementing the U.S. Web Design System (USWDS) 4.0 for federal government websites. This template provides a reference implementation that demonstrates best practices for integrating USWDS with modern React patterns.

## Overview

This template is part of USWDS 4.0 and provides:

- **Next.js 14+ with App Router** - Modern React server components and routing
- **Tailwind CSS with USWDS Design Tokens** - Utility-first CSS mapped to USWDS specifications
- **Radix UI Primitives** - Accessible, unstyled component primitives
- **Sonner Toast Notifications** - Modern notification system
- **TypeScript** - Full type safety throughout the codebase
- **WCAG 2.0 AA & Section 508 Compliance** - Built-in accessibility

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone or copy this template to your project:

```bash
npx create-next-app@latest my-gov-site --example https://github.com/uswds/uswds/tree/develop/packages/nextjs-template
```

Or manually copy the `packages/nextjs-template` directory to your project.

2. Install dependencies:

```bash
cd my-gov-site
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs-template/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   └── ui/                 # Reusable UI components
│   │       ├── alert.tsx       # USWDS Alert component
│   │       └── button.tsx      # USWDS Button component
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   └── styles/
│       └── globals.css         # Global styles and Tailwind imports
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration with USWDS tokens
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Using USWDS Design Tokens

This template maps USWDS design tokens to Tailwind CSS utilities. You can use familiar Tailwind syntax while maintaining USWDS design consistency:

### Colors

```jsx
// Primary colors
<div className="bg-uswds-primary text-white">Primary</div>
<div className="bg-uswds-primary-dark">Primary Dark</div>
<div className="bg-uswds-primary-light">Primary Light</div>

// Secondary colors
<div className="bg-uswds-secondary">Secondary</div>

// Status colors
<div className="bg-uswds-success">Success</div>
<div className="bg-uswds-warning">Warning</div>
<div className="bg-uswds-error">Error</div>
<div className="bg-uswds-info">Info</div>
```

### Typography

```jsx
// Font families
<p className="font-uswds-sans">Sans-serif text</p>
<p className="font-uswds-serif">Serif text</p>
<p className="font-uswds-mono">Monospace text</p>

// Font sizes
<p className="text-uswds-sm">Small text</p>
<p className="text-uswds-lg">Large text</p>
<p className="text-uswds-2xl">Extra large text</p>
```

### Spacing

```jsx
// Padding and margin using USWDS units
<div className="p-uswds-2 m-uswds-3">Spaced content</div>
<div className="px-uswds-4 py-uswds-2">Horizontal and vertical spacing</div>
```

## Components

### Button

```jsx
import { Button } from "@/components/ui/button";

// Variants
<Button>Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="destructive">Destructive Button</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### Alert

```jsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

<Alert variant="info">
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>This is an informational message.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your action was successful.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Please review this information.</AlertDescription>
</Alert>

<Alert variant="error">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>An error occurred.</AlertDescription>
</Alert>
```

### Toast Notifications

```jsx
import { toast } from "sonner";

// Show toast notifications
toast.success("Action completed successfully");
toast.error("An error occurred");
toast.info("Here is some information");
toast.warning("Please be careful");
```

## Accessibility

This template is built with accessibility as a core requirement:

- **Skip Navigation Link** - Allows keyboard users to skip to main content
- **Focus Management** - Visible focus indicators following USWDS guidelines
- **ARIA Attributes** - Proper ARIA roles and attributes on all components
- **Color Contrast** - USWDS colors meet WCAG 2.0 AA contrast requirements
- **Keyboard Navigation** - All interactive elements are keyboard accessible

## Customization

### Extending the Tailwind Configuration

You can extend the USWDS tokens in `tailwind.config.ts`:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Add custom colors while keeping USWDS tokens
        "custom-brand": "#your-color",
      },
    },
  },
};
```

### Adding New Components

Create new components in `src/components/ui/` following the existing patterns:

1. Use Radix UI primitives for accessibility
2. Style with Tailwind CSS using USWDS tokens
3. Use `class-variance-authority` for variant management
4. Export from a barrel file for clean imports

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

This template supports the same browsers as USWDS:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Please see the main [USWDS Contributing Guide](../../CONTRIBUTING.md) for information on how to contribute to this project.

## License

This project is in the public domain within the United States. See [LICENSE.md](../../LICENSE.md) for more information.

## Resources

- [USWDS Documentation](https://designsystem.digital.gov/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives)
