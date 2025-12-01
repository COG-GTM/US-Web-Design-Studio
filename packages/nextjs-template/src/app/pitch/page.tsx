"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PitchDeck() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      {/* Government Banner - Top */}
      <div className="bg-[#111111] py-3 px-6 border-b border-[#333]">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Image
            src="/us-flag.png"
            alt="U.S. Flag"
            width={24}
            height={24}
            className="opacity-90"
          />
                    <span className="text-[13px] text-gray-300 tracking-wide">
                      AN OFFICIAL PARTNER OF THE UNITED STATES GOVERNMENT
                    </span>
        </div>
      </div>

      {/* Header */}
      <header className="py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div>
            <h1 className="text-[15px] font-medium tracking-wide text-white">
              USWDS MODERNIZATION INITIATIVE
            </h1>
            <p className="text-[13px] text-gray-400">
              BY{" "}
              <a href="#cta" className="text-white underline underline-offset-4 hover:text-gray-300">
                EXECUTIVE ORDER
              </a>
            </p>
          </div>
                    <Image
                      src="/us-flag.png"
                      alt="U.S. Flag"
                      width={48}
                      height={48}
                      className="opacity-90"
                    />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl ml-auto">
            <h2 className="text-[2.75rem] md:text-[3.5rem] leading-[1.1] font-normal text-white mb-8">
              Devin has built the foundation for{" "}
              <a href="https://ndstudio.gov" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gray-300">
                National Design Studio
              </a>{" "}
              to modernize how Americans experience their government online.
            </h2>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-8 mt-16">
              <div>
                <h3 className="text-white font-medium mb-2">Mission</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Modernizing the interfaces that serve everyday citizens with USWDS 4.0.
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Built By</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Cognition AI &bull; Devin
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Tech Stack</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Next.js, Tailwind CSS, Radix UI, Sonner
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Status</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ready for deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* USDS + Cognition AI Section */}
            <section className="py-24 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] font-normal text-white mb-8">
                      USDS + Cognition AI
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed mb-6">
                      The U.S. Digital Service sets the standard for how government serves citizens online. 
                      Cognition AI brings Devin — the world&apos;s first AI software engineer — to accelerate that mission.
                    </p>
                    <p className="text-xl text-gray-400 leading-relaxed">
                      Together, we can modernize federal websites at unprecedented speed while maintaining 
                      the accessibility, security, and compliance standards that Americans deserve.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-6 mb-8">
                        <span className="text-[4rem] md:text-[5rem] font-bold tracking-tighter text-white/80">
                          USDS
                        </span>
                        <span className="text-[2rem] text-gray-500">+</span>
                        <span className="text-[4rem] md:text-[5rem] font-bold tracking-tighter text-white/80">
                          Devin
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">Powered by Cognition AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-[#333]" />

            {/* Large Logo Section */}
            <section className="py-16 px-6 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-8">
                  <span className="text-[8rem] md:text-[12rem] font-bold tracking-tighter text-white/10">
                    US
                  </span>
                  <Image
                    src="/us-flag.png"
                    alt="U.S. Flag"
                    width={120}
                    height={120}
                    className="opacity-80"
                  />
                  <span className="text-[8rem] md:text-[12rem] font-bold tracking-tighter text-white/10">
                    WDS
                  </span>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-[#333]" />

      {/* What We Built Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-16">
            <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] font-normal text-white mb-8">
              What We Built
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Two production-ready pull requests that establish the foundation for USWDS 4.0 — 
              the same modern stack powering NDStudio.gov, AmericaByDesign.gov, and TrumpRx.gov.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PR #1 */}
            <a 
              href="https://github.com/COG-GTM/US-Web-Design-Studio/pull/1"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#333] p-8 hover:border-[#555] transition-colors block"
            >
              <div className="text-sm text-gray-500 mb-2">PR #1</div>
              <h3 className="text-xl font-medium mb-4">@uswds/nextjs-template Package</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Complete Next.js 14 App Router setup with Tailwind CSS mapped to USWDS design tokens. 
                Includes Button and Alert components with full accessibility support.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js 14', 'Tailwind CSS', 'TypeScript', 'USWDS Tokens'].map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </a>

            {/* PR #2 */}
            <a 
              href="https://github.com/COG-GTM/US-Web-Design-Studio/pull/2"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#333] p-8 hover:border-[#555] transition-colors block"
            >
              <div className="text-sm text-gray-500 mb-2">PR #2</div>
              <h3 className="text-xl font-medium mb-4">Radix UI Components + Sonner</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Interactive, accessible components including Accordion, Dialog, and Tabs. 
                Toast notifications powered by Sonner for modern user feedback.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Radix UI', 'Accordion', 'Dialog', 'Tabs', 'Sonner'].map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#333]" />

      {/* Why This Matters Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-16">
            <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] font-normal text-white mb-8">
              Why This Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t border-[#444] pt-8">
              <h3 className="text-xl font-medium mb-4">Same Stack as NDStudio</h3>
              <p className="text-gray-400 leading-relaxed">
                Built on the exact same technology powering NDStudio.gov — Next.js, Tailwind CSS, Radix UI, and Cloudflare.
              </p>
            </div>

            <div className="border-t border-[#444] pt-8">
              <h3 className="text-xl font-medium mb-4">AI-Assisted Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Devin can assess, migrate, and maintain federal sites at scale. What takes teams weeks takes Devin hours.
              </p>
            </div>

            <div className="border-t border-[#444] pt-8">
              <h3 className="text-xl font-medium mb-4">Ready to Deploy</h3>
              <p className="text-gray-400 leading-relaxed">
                Production-ready code with Section 508 compliance, WCAG 2.1 AA accessibility, and TypeScript type safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#333]" />

      {/* Call to Action */}
      <section id="cta" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-normal text-white mb-8">
              Let Devin modernize America&apos;s digital front door.
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              We&apos;ve proven the approach works. The next step is a 30-day pilot across 3-5 flagship agency sites.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-base font-medium">
                Schedule Briefing
              </Button>
              <a 
                href="https://github.com/COG-GTM/US-Web-Design-Studio/pull/2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="border-[#444] text-white hover:bg-white/10 rounded-full px-8 py-6 text-base"
                >
                  View the Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Large Logo Section - Bottom */}
      <section className="py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            <span className="text-[8rem] md:text-[12rem] font-bold tracking-tighter text-white/10">
              US
            </span>
            <Image
              src="/us-flag.png"
              alt="U.S. Flag"
              width={120}
              height={120}
              className="opacity-80"
            />
            <span className="text-[8rem] md:text-[12rem] font-bold tracking-tighter text-white/10">
              WDS
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-[#333]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/us-flag.png"
              alt="U.S. Flag"
              width={24}
              height={24}
              className="opacity-90"
            />
                  <span className="text-[13px] text-gray-300 tracking-wide">
                    AN OFFICIAL PARTNER OF THE UNITED STATES GOVERNMENT
                  </span>
                </div>
                <div className="text-[13px] text-gray-400">
                  USWDS MODERNIZATION INITIATIVE
                </div>
              </div>
            </footer>
    </main>
  );
}
