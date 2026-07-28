import React, { useState } from 'react';
import { 
  Search, 
  FileCode, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileCheck,
  Building,
  ChevronRight,
  Info
} from 'lucide-react';

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
  const StepIcon = current.icon;

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="bg-blue-100 text-blue-900 font-bold text-xs uppercase px-3 py-1 rounded-full border border-blue-200">
            Proven Implementation Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            The 4-Step Strategic Trust Roadmap
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From initial review to final audit support, FireMonk delivers end-to-end guidance every step of the way.
          </p>
        </div>

        {/* 4-Step Tab Cards Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={s.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all text-left relative overflow-hidden ${
                  isSelected
                    ? 'bg-blue-900 text-white border-blue-900 shadow-xl scale-[1.02]'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-2xs'
                }`}
              >
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-black font-mono ${isSelected ? 'text-amber-400' : 'text-slate-400'}`}>
                    {s.stepNumber}
                  </span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isSelected ? 'bg-blue-800 text-sky-300' : 'bg-slate-100 text-slate-600'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-blue-950'}`}>
                  {s.title}
                </h3>

                <p className={`text-[11px] mt-1 line-clamp-2 ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                  {s.subtitle}
                </p>

                {isSelected && (
                  <div className="mt-3 flex items-center text-xs font-bold text-amber-400 gap-1">
                    <span>Explore Step Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Selected Step Panel */}
        <div className="bg-white border border-blue-200 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-900 text-amber-400 flex items-center justify-center font-black text-xl shadow">
                  <StepIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-200">
                      STEP {current.stepNumber}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-sky-600" />
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

              {/* Key Deliverables Box */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-sky-600" />
                  <span>Key Deliverables & Artifacts</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {current.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenExpressBooking}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow flex items-center gap-2"
                >
                  <span>Discuss {current.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenCustomQuote}
                  className="bg-blue-50 hover:bg-blue-100 text-blue-900 font-semibold px-4 py-2.5 rounded-xl text-sm border border-blue-200"
                >
                  Get Cost Estimate
                </button>
              </div>

            </div>

            {/* Right Information & Non-CB Transparency Note */}
            <div className="lg:col-span-5 bg-blue-950 text-white rounded-2xl p-6 border border-blue-900 space-y-5">
              
              <div className="flex items-center gap-2 font-bold text-amber-400 text-sm border-b border-blue-900 pb-3">
                <Info className="w-5 h-5 text-amber-400 shrink-0" />
                <span>FireMonk Strategic Commitment</span>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-blue-100">
                <p>
                  <strong className="text-white">Why Step 04 is Crucial:</strong> International ISO rules strictly prohibit Certification Bodies (CBs) from consulting on the same systems they certify. 
                </p>
                <p>
                  By hiring FireMonk as your independent management system consultant, you receive unbiased advisory, objective internal audits, and dedicated handholding without any conflict of interest.
                </p>
                <div className="p-3 bg-blue-900/80 rounded-xl border border-blue-800 space-y-1.5 text-[11px]">
                  <div className="font-bold text-sky-300 uppercase">Complete Technical Support</div>
                  <p className="text-slate-300">
                    If any major non-conformity is raised during your accredited CB audit, FireMonk provides free technical resolution support until full clearance is achieved.
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
