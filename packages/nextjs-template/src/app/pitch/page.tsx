"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PitchDeck() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Government Banner */}
      <div className="bg-[#1a1a1a] border-b border-[#333] py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span className="text-gray-400">
            AN OFFICIAL PROPOSAL FOR THE UNITED STATES GOVERNMENT
          </span>
          <span className="text-gray-400">
            POWERED BY <span className="text-white font-semibold">COGNITION AI</span>
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <Image
              src="/us-flag.png"
              alt="United States"
              width={120}
              height={120}
              className="opacity-90"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Modernizing America&apos;s
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Digital Front Door
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            A unified, accessible, AI-powered approach to upgrading federal web 
            experiences for 330 million Americans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold rounded-full"
              onClick={() => document.getElementById('executive-summary')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Executive Summary
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
              onClick={() => document.getElementById('reference-implementation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See the Implementation
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="py-24 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            A Single, Modern Stack
            <br />
            <span className="text-gray-400">to Serve 330M People</span>
          </h2>
          
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            The Executive Order to modernize government interfaces requires a unified approach. 
            We&apos;ve already built the foundation.
          </p>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 hover:border-[#555] transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Accessibility & Trust</h3>
              <p className="text-gray-400">
                WCAG 2.1 AA compliant, Section 508 certified. Every American can access their government online.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 hover:border-[#555] transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Speed & Reliability</h3>
              <p className="text-gray-400">
                Sub-second load times. 99.99% uptime. Cloudflare-powered infrastructure trusted by millions.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 hover:border-[#555] transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Cost-Effective</h3>
              <p className="text-gray-400">
                AI-assisted development reduces costs by 60%. One team can modernize hundreds of sites.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4">
            {['USWDS 4.0', 'Next.js', 'Tailwind CSS', 'Radix UI', 'Sonner', 'Cloudflare'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full text-sm font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section - Government Sites */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Proof of What&apos;s Possible
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            These sites prove the federal web can be fast, secure, and beautiful today.
            All built on the same modern stack.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'NDStudio.gov', desc: 'National Design Studio', features: ['Next.js App Router', 'Radix UI', 'Sonner'] },
              { name: 'AmericaByDesign.gov', desc: 'America by Design Initiative', features: ['Next.js', 'Tailwind CSS', 'Cloudflare'] },
              { name: 'TrumpRx.gov', desc: 'Prescription Drug Pricing', features: ['Next.js', 'Tailwind CSS', 'TypeScript'] },
              { name: 'Genesis.energy.gov', desc: 'Energy Department Portal', features: ['Radix UI', 'Payload CMS', 'Cloudflare Stream'] },
              { name: 'TrumpCard.gov', desc: 'Government Services Card', features: ['Next.js', 'Cloudflare Turnstile', 'Analytics'] },
            ].map((site) => (
              <div 
                key={site.name}
                className="bg-[#111] border border-[#222] rounded-2xl p-6 hover:border-[#444] transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-2">{site.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{site.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {site.features.map((f) => (
                    <span key={f} className="text-xs px-2 py-1 bg-[#1a1a1a] rounded text-gray-400">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Call to action card */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">Your Agency Here</h3>
              <p className="text-gray-400 text-sm">
                Join the modernization initiative and deliver world-class digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap Section */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            The Gap in Federal Web
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-900/10 border border-red-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Legacy Reality</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">&#x2717;</span>
                  Thousands of sites on outdated, bespoke stacks
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">&#x2717;</span>
                  Inconsistent design and poor accessibility
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">&#x2717;</span>
                  High maintenance costs and security risks
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">&#x2717;</span>
                  Slow page loads frustrating citizens
                </li>
              </ul>
            </div>

            <div className="bg-green-900/10 border border-green-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Modern Solution</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">&#x2713;</span>
                  Unified USWDS 4.0 + Next.js stack
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">&#x2713;</span>
                  Consistent, accessible design system
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">&#x2713;</span>
                  AI-assisted development and maintenance
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">&#x2713;</span>
                  Sub-second performance on Cloudflare
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Implementation */}
      <section id="reference-implementation" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            USWDS 4.0
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            From static toolkit to living reference implementation.
            Already built. Ready to deploy.
          </p>

          {/* Architecture Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
            {[
              { label: 'USWDS Core', sub: 'Design Tokens' },
              { label: '@uswds/uswds', sub: 'Framework Agnostic' },
              { label: '@uswds/nextjs-template', sub: 'Reference Implementation' },
              { label: 'Agency Sites', sub: 'Production Ready' },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-4 text-center min-w-[180px]">
                  <div className="font-bold text-sm">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.sub}</div>
                </div>
                {i < 3 && (
                  <svg className="w-6 h-6 text-gray-600 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'USWDS-aligned Tailwind tokens',
              'Radix UI accessible components',
              'Button, Alert, Accordion, Dialog',
              'Tabs, Toast notifications',
              'Next.js App Router ready',
              'TypeScript for type safety',
              'Section 508 compliant',
              'Production-tested patterns',
            ].map((feature) => (
              <div 
                key={feature}
                className="bg-[#111] border border-[#222] rounded-lg p-4 text-sm text-gray-300"
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">View the implementation:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://github.com/COG-GTM/US-Web-Design-Studio/pull/1" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#555] transition-colors"
              >
                PR #1: Package Structure
              </a>
              <a 
                href="https://github.com/COG-GTM/US-Web-Design-Studio/pull/2" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#555] transition-colors"
              >
                PR #2: Radix Components
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Devin Section */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Why Devin
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            An AI Engineer is the right tool for a federal-scale upgrade.
          </p>

          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-[#333]">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-6">
                Automated Site Assessments
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-lg pb-6">
                Devin can scan existing federal sites, identify gaps versus USWDS 4.0 standards, 
                and propose targeted upgrades. What would take a team weeks takes Devin hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-[#333]">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-6">
                Template-Driven Implementation
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-lg pb-6">
                Using the Next.js template as a foundation, Devin scaffolds new experiences 
                quickly while maintaining consistency with USWDS design patterns and accessibility requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-[#333]">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-6">
                Continuous Compliance
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-lg pb-6">
                Devin keeps sites aligned with Section 508, WCAG 2.1 AA, and security best practices. 
                Automated monitoring and updates ensure ongoing compliance without manual oversight.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Workflow Timeline */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {['Discover', 'Design', 'Migrate', 'Validate', 'Maintain'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <span className="font-medium">{step}</span>
                {i < 4 && <span className="text-gray-600 mx-2">&#8594;</span>}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4">Devin powers every step</p>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Implementation Roadmap
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            A phased approach to modernizing federal web experiences.
          </p>

          <Tabs defaultValue="phase1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#1a1a1a] rounded-xl p-1 mb-8">
              <TabsTrigger value="phase1" className="rounded-lg data-[state=active]:bg-[#333]">
                Phase 1
              </TabsTrigger>
              <TabsTrigger value="phase2" className="rounded-lg data-[state=active]:bg-[#333]">
                Phase 2
              </TabsTrigger>
              <TabsTrigger value="phase3" className="rounded-lg data-[state=active]:bg-[#333]">
                Phase 3
              </TabsTrigger>
            </TabsList>

            <TabsContent value="phase1" className="bg-[#111] border border-[#222] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">90-Day Pilot</h3>
              <p className="text-gray-500 mb-6">3 flagship agency sites</p>
              <ul className="space-y-3 text-gray-400">
                <li>&#8226; Select 3 high-visibility agency sites for pilot</li>
                <li>&#8226; Deploy USWDS 4.0 + Next.js template</li>
                <li>&#8226; Devin-assisted migration and testing</li>
                <li>&#8226; Measure performance, accessibility, user satisfaction</li>
              </ul>
            </TabsContent>

            <TabsContent value="phase2" className="bg-[#111] border border-[#222] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">12-18 Month Rollout</h3>
              <p className="text-gray-500 mb-6">Priority sites across agencies</p>
              <ul className="space-y-3 text-gray-400">
                <li>&#8226; Expand to 50+ priority federal sites</li>
                <li>&#8226; Establish agency training programs</li>
                <li>&#8226; Build shared component library</li>
                <li>&#8226; Create governance framework</li>
              </ul>
            </TabsContent>

            <TabsContent value="phase3" className="bg-[#111] border border-[#222] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Long-Term Governance</h3>
              <p className="text-gray-500 mb-6">Sustainable modernization platform</p>
              <ul className="space-y-3 text-gray-400">
                <li>&#8226; Continuous compliance monitoring</li>
                <li>&#8226; AI-assisted maintenance and updates</li>
                <li>&#8226; Cross-agency design system evolution</li>
                <li>&#8226; Performance and security dashboards</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Governance & Compliance
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p className="text-gray-400">
                Section 508 & WCAG 2.1 AA baked into every component. Automated testing ensures ongoing compliance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-500/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Security</h3>
              <p className="text-gray-400">
                FedRAMP-aligned hosting options. Cloudflare Turnstile for bot protection. Zero-trust architecture.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Operations</h3>
              <p className="text-gray-400">
                Cloudflare Insights for observability. 99.99% uptime SLA. Global edge deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            An Executive Order to Modernize
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How America Meets Its People Online
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Fund and mandate a USWDS 4.0 + Next.js reference implementation led by Devin and the USWDS team. 
            Start with a 90-day pilot across 3-5 flagship sites.
          </p>

          <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">Next Step</h3>
            <p className="text-gray-400 text-lg">
              Select 3-5 flagship sites for a 90-day modernization pilot.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold rounded-full">
              Schedule Briefing
            </Button>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
            >
              View Technical Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0a0a0a] border-t border-[#222]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Image src="/us-flag.png" alt="US" width={40} height={40} className="opacity-70" />
            <span className="text-gray-500">Modernizing America&apos;s Digital Front Door</span>
          </div>
          <div className="text-gray-500 text-sm">
            Powered by <span className="text-white font-semibold">Cognition AI</span> &bull; Built with USWDS 4.0
          </div>
        </div>
      </footer>
    </main>
  );
}
