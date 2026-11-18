import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  FileCode,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCheck,
  ChevronRight,
  Info
} from 'lucide-react';
import consultingArch from '../assets/images/consulting_architecture_1795006378977.jpg';

interface TrustRoadmapProps {
  onOpenExpressBooking: () => void;
  onOpenCustomQuote: () => void;
}

export const TrustRoadmap: React.FC<TrustRoadmapProps> = ({
  onOpenExpressBooking,
  onOpenCustomQuote
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNumber: '01',
      title: 'Gap Analysis & Readiness Assessment',
      subtitle: 'Evaluating current operational maturity & identifying compliance delta',
      icon: Search,
      duration: '1 - 2 Weeks',
      deliverables: [
        'Comprehensive Gap Assessment Matrix',
        'ISO Standard Clause-by-Clause Compliance Breakdown',
        'Executive Leadership Debrief & Roadmap Charter',
        'Resource & Effort Estimate'
      ],
      description: 'Our lead auditors conduct a thorough evaluation of your existing SOPs, workflows, and infrastructure against the target ISO standard. We pinpoint existing strengths, document operational gaps, and establish a clear implementation baseline.'
    },
    {
      stepNumber: '02',
      title: 'Custom Architecture, Consulting & Core Training',
      subtitle: 'Building custom documentation frameworks & upskilling your core team',
      icon: FileCode,
      duration: '4 - 8 Weeks',
      deliverables: [
        'Customized Quality/Security Manuals & Policies',
        'Departmental SOPs & Process Flow Diagrams',
        'Risk Management Register & Incident Matrices',
        'Interactive Employee Awareness & Core Training Workshops'
      ],
      description: 'We co-design a lightweight, high-utility management system customized to your exact operational workflows. FireMonk consultants craft custom documentation while training your key personnel to ensure seamless day-to-day adoption without bureaucratic bloat.'
    },
    {
      stepNumber: '03',
      title: 'Internal Audits & Mock Assessments',
      subtitle: 'Simulating the formal audit environment to eliminate non-conformities',
      icon: ShieldCheck,
      duration: '2 - 3 Weeks',
      deliverables: [
        'Official Internal Audit Report & Findings',
        'Corrective Action Plan (CAPA) Tracker',
        'Management Review Meeting (MRM) Minutes',
        'Pre-Certification Readiness Clearance Certificate'
      ],
      description: 'Before inviting external regulators or inspectors, our senior lead auditors execute a rigorous internal audit. We stress-test your management system, run mock interviews with process owners, identify minor/major non-conformities, and verify CAPA completion.'
    },
    {
      stepNumber: '04',
      title: 'Audit Support',
      subtitle: 'Providing expert handholding during external accredited CB audits',
      icon: Award,
      duration: 'Ongoing Support',
      deliverables: [
        'On-site / Remote Technical Advisory during Stage 1 & Stage 2 Audits',
        'Fast-track Non-Conformity Response Documentation',
        'Surveillance & Continuous Improvement Roadmap'
      ],
      description: 'We stand by your side during formal Stage 1 & Stage 2 audits conducted by independent accredited Certification Bodies. We provide technical advisory, help articulate process controls, and ensure a smooth certification experience.'
    }
  ];

  const current = steps[activeStep];
  const IconComponent = current.icon;

  return (
    <section className="relative py-20 bg-slate-50 bg-arch-grid-light border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0060df]">
            <span className="w-6 h-0.5 bg-[#ff5500] rounded-full" />
            <span>Proven Implementation Methodology</span>
            <span className="w-6 h-0.5 bg-[#ff5500] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            The 4-Step Strategic Trust Roadmap
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From initial gap review to external Certification Body support, FireMonk delivers structured advisory every step of the way.
          </p>
        </motion.div>

        {/* Interactive Stepper Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((st, idx) => {
            const StepIcon = st.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={st.stepNumber}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`relative cursor-pointer rounded-2xl p-5 border transition-all duration-200 text-left overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-br from-blue-950 via-blue-900 to-[#0d2259] text-white border-blue-800 shadow-xl -translate-y-0.5'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="roadmapActiveGlow"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff5500] via-amber-400 to-sky-400"
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-2xl font-black tabular-nums ${isActive ? 'text-amber-400' : 'text-slate-300'}`}>
                      {st.stepNumber}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/10 text-sky-300' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className={`text-sm font-bold leading-snug ${isActive ? 'text-white' : 'text-blue-950'}`}>
                    {st.title}
                  </h3>
                  <p className={`text-xs mt-1.5 line-clamp-2 ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
                    {st.subtitle}
                  </p>
                </div>

                <div className={`mt-4 flex items-center text-xs font-bold gap-1 ${isActive ? 'text-amber-300' : 'text-blue-900 opacity-75'}`}>
                  <span>{isActive ? 'Viewing Details' : 'Select Step'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-0.5' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detail Card with Animated Transitions */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Step Content */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.stepNumber}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-950 to-blue-800 text-amber-400 flex items-center justify-center shadow-md shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span className="font-bold text-[#ff5500] tabular-nums">
                          Step {current.stepNumber}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold flex items-center gap-1 text-slate-600">
                          <Clock className="w-3.5 h-3.5 text-[#0060df]" />
                          Duration: {current.duration}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight mt-1">
                        {current.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {current.description}
                  </p>

                  {/* Deliverables */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-[#0060df]" />
                      <span>Key Deliverables & Artifacts</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                      {current.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-medium leading-snug">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenExpressBooking}
                  className="bg-gradient-to-r from-[#ff5500] to-amber-500 hover:from-[#e64d00] hover:to-amber-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow hover:shadow-md flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Discuss Step {current.stepNumber}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenCustomQuote}
                  className="bg-slate-100 hover:bg-blue-50 text-blue-950 font-semibold px-4 py-2.5 rounded-xl text-sm border border-slate-200 hover:border-blue-300 transition-colors whitespace-nowrap shrink-0"
                >
                  Get Cost Estimate
                </button>
              </div>
            </div>

            {/* Strategic Commitment Side Panel with Boardroom Moving Photography */}
            <div className="lg:col-span-5 bg-[#08112b] text-white rounded-2xl border border-blue-900/80 overflow-hidden flex flex-col justify-between shadow-lg">
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={consultingArch}
                  alt="Executive advisory boardroom overlooking twilight financial district"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover animate-ken-burns-card"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08112b] via-[#08112b]/45 to-transparent" />
                <div className="absolute bottom-3 left-5 right-5 flex items-center gap-2 font-bold text-amber-300 text-sm">
                  <Info className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>FireMonk Strategic Commitment</span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-blue-100">
                  <p>
                    <strong className="text-white">Independent Advisory Integrity:</strong> International ISO impartiality rules prohibit Certification Bodies (CBs) from consulting on the systems they certify.
                  </p>
                  <p>
                    Engaging FireMonk gives your organization objective internal audits, customized documentation, and dedicated technical representation without conflict of interest.
                  </p>
                </div>

                <div className="p-4 bg-blue-950/80 rounded-xl border border-blue-800/80 space-y-1.5 text-xs">
                  <div className="font-bold text-sky-300 uppercase tracking-wide text-[11px]">
                    Complete Non-Conformity Clearance Support
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    If any major non-conformity is raised during your accredited CB audit, FireMonk provides dedicated technical resolution support until full clearance is achieved.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
