import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  Calendar,
  FileText,
  ArrowRight,
  Compass,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import heroEnterpriseHub from '../assets/images/hero_enterprise_hub_1795006383269.jpg';
import consultingArch from '../assets/images/consulting_architecture_1795006378977.jpg';
import auditFacility from '../assets/images/audit_precision_facility_1795006383319.jpg';
import governanceVault from '../assets/images/governance_security_vault_1795006383889.jpg';

interface HeroProps {
  onOpenExpressBooking: () => void;
  onOpenCustomQuote: () => void;
  setCurrentView: (view: string) => void;
}

const PRACTICE_PILLARS = [
  {
    id: 'consulting',
    index: '01',
    label: 'Consulting',
    title: 'Management Systems Architecture',
    summary: 'Custom SOP design, risk registers, and clause-by-clause ISO frameworks engineered around your real workflows.',
    metric: '25+ ISO & Industry Frameworks',
    accentText: 'text-sky-300',
    accentBorder: 'border-sky-400/50',
    accentBg: 'from-sky-500/20 to-blue-600/10',
    image: consultingArch,
    icon: Compass,
  },
  {
    id: 'auditing',
    index: '02',
    label: 'Auditing',
    title: 'Internal Audits & Pre-CB Readiness',
    summary: 'Rigorous mock audits led by IRCA certified lead auditors to close non-conformities before external certification.',
    metric: '100% Pre-Certification Verification',
    accentText: 'text-amber-300',
    accentBorder: 'border-amber-400/50',
    accentBg: 'from-amber-500/20 to-orange-600/10',
    image: auditFacility,
    icon: ShieldCheck,
  },
  {
    id: 'training',
    index: '03',
    label: 'Training',
    title: 'Corporate & Lead Auditor Programs',
    summary: 'Executive governance briefings, awareness workshops, and internal auditor qualification across teams and sites.',
    metric: 'On-Site & Virtual Delivery',
    accentText: 'text-emerald-300',
    accentBorder: 'border-emerald-400/50',
    accentBg: 'from-emerald-500/20 to-teal-600/10',
    image: governanceVault,
    icon: GraduationCap,
  },
] as const;

const MARQUEE_STANDARDS = [
  'ISO 9001:2015 QMS',
  'ISO 27001:2022 ISMS',
  'ISO 42001:2023 AI Governance',
  'ISO 13485:2016 Medical Devices',
  'IATF 16949:2016 Automotive',
  'AS9100 Rev D Aerospace',
  'ISO 14001:2015 EMS',
  'ISO 45001:2018 OH&S',
  'ISO 22301:2019 BCMS',
  'ISO 27701:2019 Privacy',
  'FDA 21 CFR Part 11',
  'CMMI V2.0 / V3.0',
];

export const Hero: React.FC<HeroProps> = ({
  onOpenExpressBooking,
  onOpenCustomQuote,
  setCurrentView
}) => {
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActivePillarIdx((prev) => (prev + 1) % PRACTICE_PILLARS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activePillar = PRACTICE_PILLARS[activePillarIdx];

  return (
    <section className="relative overflow-hidden bg-[#060c1c] text-slate-100 border-b border-slate-800">
      {/* Moving Ken Burns Architectural Atrium Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={heroEnterpriseHub}
          alt="Modern glass and steel enterprise headquarters atrium illuminated in twilight cobalt and warm amber"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover animate-ken-burns opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#050a18]/92 via-[#091638]/80 to-[#060d20]/94" />
        <div className="absolute inset-0 bg-arch-grid opacity-35" />
      </div>

      {/* Vibrant Floating Atmospheric Color Glows */}
      <div className="absolute -top-24 right-1/4 w-[28rem] h-[28rem] bg-[#0060df]/25 rounded-full blur-3xl animate-ambient pointer-events-none" />
      <div className="absolute bottom-8 -left-16 w-[24rem] h-[24rem] bg-[#ff5500]/20 rounded-full blur-3xl animate-ambient pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-18 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">

          {/* Left Column: Dominant Typographic Proposition (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left"
          >
            {/* Clean Unboxed Editorial Kicker */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-xs font-semibold tracking-wide text-sky-300">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#ff5500] to-amber-400 rounded-full" />
              <span>FireMonk LLP</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="text-amber-300">Management Systems Advisory</span>
            </div>

            {/* Balanced High-Impact Display Headline */}
            <h1 className="text-[clamp(2.25rem,4.1vw,3.65rem)] font-black tracking-tight text-white leading-[1.08] max-w-2xl mx-auto lg:mx-0">
              Architecting Certified{' '}
              <span className="ff-gradient-text-light">Quality, Safety & Security</span>{' '}
              Systems.
            </h1>

            {/* Crisp Value Proposition */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              End-to-end Management Systems{' '}
              <strong className="text-sky-300 font-bold">Consulting</strong>,{' '}
              <strong className="text-amber-300 font-bold">Internal Auditing</strong>, and{' '}
              <strong className="text-emerald-300 font-bold">Corporate Training</strong>{' '}
              across 25+ international standards including ISO 9001, ISO 27001, ISO 42001 (AI), ISO 13485, and IATF 16949.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-1 text-xs sm:text-sm text-slate-200 max-w-xl mx-auto lg:mx-0">
              {[
                'End-to-End Implementation Support',
                'IRCA Certified Lead Auditors',
                'Custom SOPs, Risk & Policy Design',
                'Pre-Audit Review & Gap Assessments',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenExpressBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#ff5500] via-orange-500 to-amber-500 hover:from-[#e64d00] hover:to-amber-600 text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-orange-950/50 hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Express Consultation</span>
              </button>

              <button
                onClick={onOpenCustomQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3.5 rounded-xl text-sm sm:text-base border border-white/20 backdrop-blur-sm transition-all whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4 text-sky-300" />
                <span>Request Custom Corporate Quote</span>
              </button>
            </div>

            {/* Interactive Standard Shortcuts */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
              <span className="text-slate-400 font-medium mr-1">Explore:</span>
              {[
                'ISO 9001 (QMS)',
                'ISO 27001 (ISMS)',
                'ISO 42001 (AI)',
                'ISO 13485 (Medical)',
              ].map((std) => (
                <button
                  key={std}
                  onClick={() => setCurrentView('standards')}
                  className="bg-blue-950/70 hover:bg-blue-800/80 text-sky-200 hover:text-white px-2.5 py-1 rounded-lg border border-blue-700/60 transition-colors whitespace-nowrap shrink-0"
                >
                  {std}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Moving Visual Practice Showcase (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:col-span-5 flex flex-col justify-between bg-[#0a132c]/85 backdrop-blur-md border border-blue-700/50 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Dynamic Moving Image Header Frame */}
            <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePillar.id}
                  src={activePillar.image}
                  alt={activePillar.title}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1.02 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover animate-ken-burns-card"
                />
              </AnimatePresence>

              {/* Measured Contrast Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a132c] via-[#0a132c]/45 to-transparent" />

              {/* Practice Tabs Overlaid at Top of Media Frame */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center gap-1.5 bg-slate-950/75 backdrop-blur-md p-1 rounded-xl border border-white/10">
                {PRACTICE_PILLARS.map((pillar, idx) => {
                  const isActive = idx === activePillarIdx;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setActivePillarIdx(idx)}
                      className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#ff5500] to-amber-500 text-white shadow-sm'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {pillar.index}. {pillar.label}
                    </button>
                  );
                })}
              </div>

              {/* Active Pillar Caption */}
              <div className="absolute bottom-3.5 left-4 right-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`text-[11px] font-semibold ${activePillar.accentText}`}>
                      {activePillar.metric}
                    </div>
                    <h2 className="text-lg font-extrabold text-white tracking-tight mt-0.5">
                      {activePillar.title}
                    </h2>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Interactive Pillar Body & Summary */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activePillar.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  {activePillar.summary}
                </motion.p>
              </AnimatePresence>

              {/* Compact Interactive Pillar List */}
              <div className="space-y-1.5 border-t border-slate-800/80 pt-3">
                {PRACTICE_PILLARS.map((pillar, idx) => {
                  const PillarIcon = pillar.icon;
                  const isActive = idx === activePillarIdx;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setActivePillarIdx(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all ${
                        isActive
                          ? `bg-gradient-to-r ${pillar.accentBg} border ${pillar.accentBorder}`
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <PillarIcon className={`w-4 h-4 ${pillar.accentText} shrink-0`} />
                        <span className="text-xs font-bold text-white">{pillar.label}</span>
                        <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
                        <span className="text-[11px] text-slate-400 hidden sm:inline truncate max-w-[180px]">
                          {pillar.title}
                        </span>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? `${pillar.accentText} translate-x-0.5` : 'text-slate-500'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Clean Tabular Proof Strip */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-800/80 text-center">
                <div>
                  <div className="text-lg sm:text-xl font-black text-amber-400 tabular-nums">25+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Standards</div>
                </div>
                <div className="border-x border-slate-800">
                  <div className="text-lg sm:text-xl font-black text-sky-400 tabular-nums">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Readiness Focus</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-emerald-400">IRCA</div>
                  <div className="text-[11px] text-slate-400 font-medium">Lead Auditors</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vibrant Kinetic ISO Standards Ribbon */}
      <div className="relative bg-[#040814]/90 border-t border-blue-900/60 py-3 overflow-hidden">
        <div className="animate-marquee items-center gap-8">
          {[...MARQUEE_STANDARDS, ...MARQUEE_STANDARDS].map((std, idx) => (
            <button
              key={`${std}-${idx}`}
              type="button"
              onClick={() => setCurrentView('standards')}
              className="inline-flex items-center gap-3 text-xs font-semibold text-slate-300 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 px-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#ff5500] to-amber-400" />
              <span>{std}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
