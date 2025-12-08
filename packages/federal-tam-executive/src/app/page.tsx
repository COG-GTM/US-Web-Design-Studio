"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Lock,
  TrendingUp,
  Target,
  Shield,
  ChevronDown,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  DollarSign,
  Building2,
  Cpu,
} from "lucide-react";

const ACCESS_CODE = "cognition2026";

const GDRIVE_BASE = "https://drive.google.com/drive/folders/1ZnfGBrXvI82huPSEVWbEyz3w9mkEIYbW";

const SOURCE_FILES = {
  storyboard: { name: "Federal_TAM_Executive_Storyboard.md", type: "md" },
  tam: { name: "Federal_TAM.xlsx", type: "xlsx" },
  opportunities: { name: "Top_opportunities_by_budget_verified.xlsx", type: "xlsx" },
  methodology: { name: "federal_ai_spending_methodology.md", type: "md" },
  validation: { name: "AI_Spend_Methodology_Validation.xlsx", type: "xlsx" },
};

function AccessGate({ onAccess }: { onAccess: () => void }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toLowerCase() === ACCESS_CODE) {
      onAccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Federal TAM Executive Briefing
          </h1>
          <p className="text-gray-400">
            Cognition AI | FY2026 Go-to-Market Strategy
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter access code"
              className={`w-full px-4 py-3 bg-[#1a1a1a] border ${
                error ? "border-red-500" : "border-[#333333]"
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors`}
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">Invalid access code</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            Access Briefing
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          This document contains sensitive business intelligence.
        </p>
      </motion.div>
    </div>
  );
}

function SourceLink({ file, label }: { file: keyof typeof SOURCE_FILES; label: string }) {
  return (
    <a
      href={GDRIVE_BASE}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
    >
      {SOURCE_FILES[file].type === "xlsx" ? (
        <FileSpreadsheet className="w-3 h-3" />
      ) : (
        <FileText className="w-3 h-3" />
      )}
      {label}
      <ExternalLink className="w-3 h-3" />
    </a>
  );
}

function ExecutiveDashboard() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Government Banner */}
      <div className="bg-[#1a1a1a] border-b border-[#333333] py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-gray-400">
          <span className="font-mono">COGNITION AI</span>
          <span className="text-gray-600">|</span>
          <span>INTERNAL EXECUTIVE BRIEFING</span>
          <span className="text-gray-600">|</span>
          <span>CONFIDENTIAL</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-[#333333] py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Federal AI TAM Analysis
            </h1>
            <p className="text-gray-400 text-sm">
              FY2026 Go-to-Market Strategy | December 2025
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Powered by</p>
            <p className="text-white font-semibold">Cognition AI</p>
          </div>
        </div>
      </header>

      {/* Hero / BLUF Section */}
      <section className="py-16 px-4 border-b border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 font-mono text-sm mb-4">
              BOTTOM LINE UP FRONT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              A $1.3–3.2B Federal AI Market Awaits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mb-8">
              Our rigorous analysis of federal IT spending identifies a validated, 
              significant opportunity. The critical unlock: <span className="text-white font-semibold">Devin FedRAMP authorization</span>.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <MetricCard
                icon={<DollarSign className="w-6 h-6" />}
                label="Addressable TAM"
                value="$1.3B – $3.2B"
                subtext="FY2026 validated opportunity"
              />
              <MetricCard
                icon={<Target className="w-6 h-6" />}
                label="Required Market Share"
                value="3–8%"
                subtext="To achieve $100M ARR with FedRAMP"
              />
              <MetricCard
                icon={<TrendingUp className="w-6 h-6" />}
                label="Market Access Unlock"
                value="85–90%"
                subtext="Of federal market with Devin FedRAMP"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-4 border-b border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Executive Summary
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <SummaryCard
                number="01"
                title="What This Is"
                description="A comprehensive TAM analysis of federal AI-relevant labor spending, grounded in verified OMB data from IT Dashboard, NITRD supplements, and GAO reports."
              />
              <SummaryCard
                number="02"
                title="Why Now"
                description="FY2026 marks a watershed moment with DoD's first-ever dedicated AI/Autonomy budget line ($13.4B) and accelerating federal AI adoption."
              />
              <SummaryCard
                number="03"
                title="What We're Asking"
                description="Prioritize Devin FedRAMP authorization as a top company initiative to unlock the full federal modernization market in FY26-27."
              />
            </div>
            <div className="mt-6 text-right">
              <SourceLink file="storyboard" label="View Full Storyboard" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAM Waterfall */}
      <section className="py-16 px-4 border-b border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              TAM Methodology
            </h3>
            <p className="text-gray-400 mb-8">
              Systematic reduction from total federal IT to Cognition-addressable market
            </p>

            <div className="space-y-4">
              <WaterfallStep
                step="1"
                label="Total Federal IT Spending"
                value="$102.31B"
                source="IT Dashboard (verified)"
                width="100%"
              />
              <WaterfallStep
                step="2"
                label="External Labor + Services"
                value="$52.76B"
                source="49.7% of IT spend"
                width="52%"
              />
              <WaterfallStep
                step="3"
                label="Code Development Labor"
                value="$18.47B"
                source="35% industry benchmark"
                width="18%"
              />
              <WaterfallStep
                step="4"
                label="Modernization Focus"
                value="$12.93B"
                source="70% per MITRE/GAO"
                width="13%"
              />
              <WaterfallStep
                step="5"
                label="Cognition Addressable TAM"
                value="$1.3B – $3.2B"
                source="10-25% adoption scenarios"
                width="3%"
                highlight
              />
            </div>

            <div className="mt-6 flex gap-4">
              <SourceLink file="tam" label="Federal_TAM.xlsx" />
              <SourceLink file="methodology" label="Methodology Details" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product-Market Alignment */}
      <section className="py-16 px-4 border-b border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Product-Market Alignment
            </h3>
            <p className="text-gray-400 mb-8">
              Two products, two markets — strategic positioning for maximum impact
            </p>

            <Tabs.Root defaultValue="windsurf" className="w-full">
              <Tabs.List className="flex gap-2 mb-8">
                <Tabs.Trigger
                  value="windsurf"
                  className="px-6 py-3 rounded-full border border-[#333333] text-gray-400 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-white transition-all"
                >
                  Windsurf
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="devin"
                  className="px-6 py-3 rounded-full border border-[#333333] text-gray-400 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-white transition-all"
                >
                  Devin
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="comparison"
                  className="px-6 py-3 rounded-full border border-[#333333] text-gray-400 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-white transition-all"
                >
                  Comparison
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="windsurf">
                <ProductCard
                  name="Windsurf"
                  status="FedRAMP Authorized"
                  statusColor="green"
                  useCase="AI-powered IDE, code completion, developer productivity"
                  position="Established market with GitHub Copilot, CodeWhisperer"
                  target="Broad federal developer base"
                  opportunity="Immediate revenue opportunity across all agencies"
                />
              </Tabs.Content>

              <Tabs.Content value="devin">
                <ProductCard
                  name="Devin"
                  status="Authorization in Progress"
                  statusColor="yellow"
                  useCase="Autonomous agent, COBOL conversion, large-scale refactoring"
                  position="Differentiated capability for complex modernization"
                  target="Flagship legacy modernization programs"
                  opportunity="Premium pricing, $100M ARR path via flagship programs"
                />
              </Tabs.Content>

              <Tabs.Content value="comparison">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Windsurf</h4>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        FedRAMP Authorized — ready for deployment
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Competes in established AI IDE market
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Broad applicability across agencies
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Devin</h4>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        FedRAMP authorization in progress
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Unique autonomous capabilities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Optimal for flagship modernization
                      </li>
                    </ul>
                  </div>
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </motion.div>
        </div>
      </section>

      {/* Market Access Equation */}
      <section className="py-16 px-4 border-b border-[#333333] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              The Market Access Equation
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-8">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-yellow-500 font-semibold">Current State</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Accessible TAM</p>
                    <p className="text-2xl font-bold text-white">$100M – $300M</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Required Market Share</p>
                    <p className="text-2xl font-bold text-white">30–50%</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">FY26 Revenue Potential</p>
                    <p className="text-2xl font-bold text-white">$30M – $60M</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] border border-green-500/30 rounded-lg p-8">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-green-500 font-semibold">With Devin FedRAMP</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Accessible TAM</p>
                    <p className="text-2xl font-bold text-white">$1.3B – $3.2B</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Required Market Share</p>
                    <p className="text-2xl font-bold text-white">3–8%</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">FY26 Revenue Potential</p>
                    <p className="text-2xl font-bold text-green-400">$100M+ achievable</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 mt-8 text-center max-w-2xl mx-auto">
              With FedRAMP authorization, achieving $100M ARR requires only 3-8% market share — 
              a realistic target given Devin&apos;s differentiated capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="py-16 px-4 border-b border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Flagship Program Targets
            </h3>
            <p className="text-gray-400 mb-8">
              Named opportunities that drive $100M ARR
            </p>

            <div className="space-y-4">
              <ProgramCard
                name="SSA Disability/Claims"
                scale="60M+ lines of COBOL"
                opportunity="No strategic conversion plan exists"
                status="High Priority"
                statusColor="red"
              />
              <ProgramCard
                name="IRS IMF/BMF"
                scale="60-year-old mainframes, $332M/yr O&M"
                opportunity="GAO-flagged, $1.25B+ modernization estimate"
                status="Critical"
                statusColor="red"
              />
              <ProgramCard
                name="DCMA/DFAS Payments"
                scale="60-year COBOL/Assembly codebase"
                opportunity="Central to defense contract administration"
                status="High Priority"
                statusColor="yellow"
              />
              <ProgramCard
                name="AFTAC GeoSES"
                scale="8M lines of signal analysis code"
                opportunity="IL6 multi-cloud migration underway"
                status="In Progress"
                statusColor="green"
              />
              <ProgramCard
                name="VA EHR Modernization"
                scale="$16-50B lifecycle, VistA COBOL/MUMPS"
                opportunity="Resuming mid-2026"
                status="Emerging"
                statusColor="blue"
              />
            </div>

            <div className="mt-6">
              <SourceLink file="opportunities" label="View All Opportunities" />
            </div>

            <div className="mt-8 p-6 bg-[#1a1a1a] border border-[#333333] rounded-lg">
              <p className="text-gray-400">
                <span className="text-white font-semibold">Common Thread:</span> All flagship programs 
                require FedRAMP HIGH or equivalent authorization — reinforcing the strategic importance 
                of Devin authorization.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="py-16 px-4 border-b border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Strategic Roadmap
            </h3>

            <Accordion.Root type="single" collapsible className="space-y-4">
              <AccordionItem value="h1" title="H1 FY26: Foundation">
                <div className="space-y-4 text-gray-400">
                  <p>Execute immediate revenue opportunities while building authorization momentum:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                      Windsurf direct sales to federal developer base
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                      Devin FSI partnerships for authorized environments
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                      DIU/SBIR pilots to demonstrate capability
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                      Target &quot;In Process&quot; FedRAMP status by Q2
                    </li>
                  </ul>
                </div>
              </AccordionItem>

              <AccordionItem value="h2" title="H2 FY26: Acceleration">
                <div className="space-y-4 text-gray-400">
                  <p>Leverage &quot;In Process&quot; status to open flagship conversations:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                      Engage SSA, IRS, DCMA program offices
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                      Position for FY27 budget cycle inclusion
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                      Complete full FedRAMP authorization by Q4
                    </li>
                  </ul>
                </div>
              </AccordionItem>

              <AccordionItem value="fy27" title="FY27+: Full Market Access">
                <div className="space-y-4 text-gray-400">
                  <p>With full authorization, capture flagship programs:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                      Win 2-3 flagship modernization programs
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                      Establish Cognition as federal legacy modernization leader
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                      Scale to $100M+ ARR
                    </li>
                  </ul>
                </div>
              </AccordionItem>
            </Accordion.Root>
          </motion.div>
        </div>
      </section>

      {/* State of the Market */}
      <section className="py-16 px-4 border-b border-[#333333] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              State of the Federal AI Market
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Market Tailwinds
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li>DoD&apos;s first dedicated AI/Autonomy budget: $13.4B in FY26</li>
                  <li>AI contract growth: +150% YoY (Brookings)</li>
                  <li>80% of federal IT spend on legacy O&M (MITRE)</li>
                  <li>Accelerating modernization mandates from OMB</li>
                  <li>Bipartisan support for AI adoption in government</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  Key Considerations
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li>FedRAMP authorization timeline is critical variable</li>
                  <li>Competition from GitHub Copilot, CodeWhisperer in IDE space</li>
                  <li>Devin&apos;s autonomous capabilities are differentiated</li>
                  <li>Federal procurement cycles require 12-18 month planning</li>
                  <li>IL5/IL6 classification levels require specific authorizations</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <SourceLink file="validation" label="View Methodology Validation" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Recommendation */}
      <section className="py-16 px-4 border-b border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Strategic Recommendation
            </h3>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-8">
              <h4 className="text-xl font-bold text-white mb-4">
                Accelerate Devin FedRAMP to Unlock the Full Federal Opportunity
              </h4>

              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded">1</span>
                  <p><span className="text-white font-semibold">Prioritize Devin FedRAMP Authorization</span> as a top company initiative for FY26</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded">2</span>
                  <p><span className="text-white font-semibold">Allocate dedicated resources</span> (security, infrastructure, legal) to achieve &quot;In Process&quot; status by Q2 and full authorization by Q4</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded">3</span>
                  <p><span className="text-white font-semibold">Execute phased GTM strategy</span> with Windsurf direct sales + Devin partnerships in H1, flagship program engagement in H2</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6">
                <h5 className="text-white font-semibold mb-2">Accelerate FedRAMP Path</h5>
                <p className="text-gray-400 text-sm mb-4">FY26: $60M+ with H2 momentum</p>
                <p className="text-gray-400 text-sm">FY27+: $100M+ ARR, flagship program wins</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6">
                <h5 className="text-white font-semibold mb-2">Status Quo Path</h5>
                <p className="text-gray-400 text-sm mb-4">FY26: $30-60M ceiling</p>
                <p className="text-gray-400 text-sm">FY27+: Delayed market access, competitive pressure</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-16 px-4 border-b border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Data Sources & Methodology
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Primary Sources</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    IT Dashboard (itdashboard.gov) — OMB-verified spending
                  </li>
                  <li className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    NITRD Supplement (nitrd.gov) — AI R&D figures
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" />
                    GAO Legacy IT Reports (GAO-25-107795)
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-400" />
                    MITRE Legacy Systems Report (PR-24-01820)
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    DoD FY2026 Budget — AI/Autonomy line items
                  </li>
                  <li className="flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-blue-400" />
                    GovWin/Deltek — Federal AI contract intelligence
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Analysis Files</h4>
                <div className="space-y-3">
                  <a
                    href={GDRIVE_BASE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#1a1a1a] border border-[#333333] rounded-lg hover:border-white/30 transition-colors"
                  >
                    <FileSpreadsheet className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-white text-sm font-medium">Federal_TAM.xlsx</p>
                      <p className="text-gray-500 text-xs">Core TAM calculations</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 ml-auto" />
                  </a>
                  <a
                    href={GDRIVE_BASE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#1a1a1a] border border-[#333333] rounded-lg hover:border-white/30 transition-colors"
                  >
                    <FileSpreadsheet className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-white text-sm font-medium">Top_opportunities_by_budget_verified.xlsx</p>
                      <p className="text-gray-500 text-xs">Priority program analysis</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 ml-auto" />
                  </a>
                  <a
                    href={GDRIVE_BASE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#1a1a1a] border border-[#333333] rounded-lg hover:border-white/30 transition-colors"
                  >
                    <FileText className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-white text-sm font-medium">federal_ai_spending_methodology.md</p>
                      <p className="text-gray-500 text-xs">Methodology validation</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 ml-auto" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold">Built by Cognition AI</p>
              <p className="text-gray-500 text-sm">
                Devin, the world&apos;s first AI software engineer, and Windsurf
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm">
                Analysis prepared December 2025
              </p>
              <p className="text-gray-500 text-sm">
                Data verified against authoritative federal sources
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#333333] text-center">
            <p className="text-gray-600 text-xs">
              CONFIDENTIAL — INTERNAL USE ONLY
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  subtext,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtext: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6 hover:border-white/30 transition-colors"
    >
      <div className="text-blue-400 mb-4">{icon}</div>
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-gray-500 text-sm">{subtext}</p>
    </motion.div>
  );
}

function SummaryCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6 hover:border-white/30 transition-colors"
    >
      <span className="text-blue-400 font-mono text-sm">{number}</span>
      <h4 className="text-lg font-semibold text-white mt-2 mb-3">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function WaterfallStep({
  step,
  label,
  value,
  source,
  width,
  highlight = false,
}: {
  step: string;
  label: string;
  value: string;
  source: string;
  width: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-500 font-mono text-sm w-6">{step}</span>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className={`text-sm ${highlight ? "text-white font-semibold" : "text-gray-400"}`}>
            {label}
          </span>
          <span className={`font-semibold ${highlight ? "text-blue-400" : "text-white"}`}>
            {value}
          </span>
        </div>
        <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: Number(step) * 0.1 }}
            className={`h-full rounded-full ${highlight ? "bg-blue-500" : "bg-gray-600"}`}
          />
        </div>
        <span className="text-gray-500 text-xs">{source}</span>
      </div>
    </div>
  );
}

function ProductCard({
  name,
  status,
  statusColor,
  useCase,
  position,
  target,
  opportunity,
}: {
  name: string;
  status: string;
  statusColor: "green" | "yellow" | "red" | "blue";
  useCase: string;
  position: string;
  target: string;
  opportunity: string;
}) {
  const statusColors = {
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl font-bold text-white">{name}</h4>
        <span className={`px-3 py-1 rounded-full text-sm border ${statusColors[statusColor]}`}>
          {status}
        </span>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-gray-500 text-sm">Primary Use Case</p>
          <p className="text-white">{useCase}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Competitive Position</p>
          <p className="text-white">{position}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Target Programs</p>
          <p className="text-white">{target}</p>
        </div>
        <div className="pt-4 border-t border-[#333333]">
          <p className="text-gray-500 text-sm">Opportunity</p>
          <p className="text-blue-400 font-semibold">{opportunity}</p>
        </div>
      </div>
    </div>
  );
}

function ProgramCard({
  name,
  scale,
  opportunity,
  status,
  statusColor,
}: {
  name: string;
  scale: string;
  opportunity: string;
  status: string;
  statusColor: "green" | "yellow" | "red" | "blue";
}) {
  const statusColors = {
    green: "bg-green-500/20 text-green-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    red: "bg-red-500/20 text-red-400",
    blue: "bg-blue-500/20 text-blue-400",
  };

  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#333333] rounded-lg hover:border-white/30 transition-colors"
    >
      <div className="flex-1">
        <h5 className="text-white font-semibold">{name}</h5>
        <p className="text-gray-500 text-sm">{scale}</p>
      </div>
      <div className="flex-1 text-right md:text-left">
        <p className="text-gray-400 text-sm">{opportunity}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[statusColor]}`}>
        {status}
      </span>
    </motion.div>
  );
}

function AccordionItem({
  value,
  title,
  children,
}: {
  value: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Accordion.Item
      value={value}
      className="bg-[#1a1a1a] border border-[#333333] rounded-lg overflow-hidden"
    >
      <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left hover:bg-[#222222] transition-colors group">
        <span className="text-white font-semibold">{title}</span>
        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform group-data-[state=open]:rotate-180" />
      </Accordion.Trigger>
      <Accordion.Content className="px-6 pb-6 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <AccessGate onAccess={() => setAuthenticated(true)} />;
  }

  return <ExecutiveDashboard />;
}
