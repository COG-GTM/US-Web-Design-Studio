import type { Config } from "tailwindcss";

/**
 * USWDS 4.0 Tailwind Configuration
 *
 * This configuration maps USWDS design tokens to Tailwind CSS utilities,
 * enabling developers to use familiar Tailwind syntax while maintaining
 * USWDS design consistency.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // USWDS Primary Colors
        "uswds-primary": {
          lightest: "#d9e8f6",
          lighter: "#73b3e7",
          light: "#2491ff",
          DEFAULT: "#005ea2",
          vivid: "#0050d8",
          dark: "#1a4480",
          darker: "#162e51",
        },
        // USWDS Secondary Colors
        "uswds-secondary": {
          lightest: "#f8dfe2",
          lighter: "#f2938c",
          light: "#e41d3d",
          DEFAULT: "#d83933",
          vivid: "#e41d3d",
          dark: "#b50909",
          darker: "#8b0a03",
        },
        // USWDS Accent Cool
        "uswds-accent-cool": {
          lightest: "#e1f3f8",
          lighter: "#97d4ea",
          light: "#28a0cb",
          DEFAULT: "#00bde3",
          dark: "#07648d",
          darker: "#074b69",
        },
        // USWDS Accent Warm
        "uswds-accent-warm": {
          lightest: "#f2e4d4",
          lighter: "#ffbc78",
          light: "#fa9441",
          DEFAULT: "#fa9441",
          dark: "#c05600",
          darker: "#775540",
        },
        // USWDS Base Colors
        "uswds-base": {
          lightest: "#f0f0f0",
          lighter: "#dfe1e2",
          light: "#a9aeb1",
          DEFAULT: "#71767a",
          dark: "#565c65",
          darker: "#3d4551",
          darkest: "#1b1b1b",
        },
        // USWDS Ink (Text) Color
        "uswds-ink": "#1b1b1b",
        // USWDS Error/Success/Warning/Info
        "uswds-error": {
          lighter: "#f4e3db",
          light: "#f39268",
          DEFAULT: "#d54309",
          dark: "#b50909",
          darker: "#6f3331",
        },
        "uswds-warning": {
          lighter: "#faf3d1",
          light: "#fee685",
          DEFAULT: "#ffbe2e",
          dark: "#e5a000",
          darker: "#936f38",
        },
        "uswds-success": {
          lighter: "#ecf3ec",
          light: "#70e17b",
          DEFAULT: "#00a91c",
          dark: "#4d8055",
          darker: "#446443",
        },
        "uswds-info": {
          lighter: "#e7f6f8",
          light: "#99deea",
          DEFAULT: "#00bde3",
          dark: "#009ec1",
          darker: "#2e6276",
        },
      },
      fontFamily: {
        // USWDS Font Families
        "uswds-sans": [
          "Source Sans Pro",
          "Helvetica Neue",
          "Helvetica",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        "uswds-serif": [
          "Merriweather",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        "uswds-mono": [
          "Roboto Mono",
          "Consolas",
          "Monaco",
          "Andale Mono",
          "monospace",
        ],
      },
      fontSize: {
        // USWDS Font Sizes (in rem)
        "uswds-3xs": ["0.81rem", { lineHeight: "1.5" }],
        "uswds-2xs": ["0.87rem", { lineHeight: "1.5" }],
        "uswds-xs": ["0.93rem", { lineHeight: "1.5" }],
        "uswds-sm": ["1rem", { lineHeight: "1.5" }],
        "uswds-md": ["1.06rem", { lineHeight: "1.5" }],
        "uswds-lg": ["1.25rem", { lineHeight: "1.4" }],
        "uswds-xl": ["1.5rem", { lineHeight: "1.3" }],
        "uswds-2xl": ["2rem", { lineHeight: "1.2" }],
        "uswds-3xl": ["2.5rem", { lineHeight: "1.2" }],
      },
      spacing: {
        // USWDS Spacing Units (1 unit = 8px)
        "uswds-05": "0.25rem",
        "uswds-1": "0.5rem",
        "uswds-105": "0.75rem",
        "uswds-2": "1rem",
        "uswds-205": "1.25rem",
        "uswds-3": "1.5rem",
        "uswds-4": "2rem",
        "uswds-5": "2.5rem",
        "uswds-6": "3rem",
        "uswds-7": "3.5rem",
        "uswds-8": "4rem",
        "uswds-9": "4.5rem",
        "uswds-10": "5rem",
        "uswds-15": "7.5rem",
      },
      borderRadius: {
        // USWDS Border Radius
        "uswds-sm": "0.125rem",
        "uswds-md": "0.25rem",
        "uswds-lg": "0.5rem",
      },
      boxShadow: {
        // USWDS Shadows
        "uswds-1": "0 1px 4px 0 rgba(0, 0, 0, 0.1)",
        "uswds-2": "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
        "uswds-3": "0 8px 16px 0 rgba(0, 0, 0, 0.1)",
        "uswds-4": "0 12px 24px 0 rgba(0, 0, 0, 0.1)",
        "uswds-5": "0 16px 32px 0 rgba(0, 0, 0, 0.1)",
      },
      maxWidth: {
        // USWDS Container Widths
        "uswds-mobile": "20rem",
        "uswds-mobile-lg": "30rem",
        "uswds-tablet": "40rem",
        "uswds-tablet-lg": "55rem",
        "uswds-desktop": "64rem",
        "uswds-desktop-lg": "75rem",
        "uswds-widescreen": "87.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
