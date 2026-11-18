import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  Clock,
  FileText,
  Users,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import heroEnterpriseHub from '../assets/images/hero_enterprise_hub_1795006383269.jpg';

interface QuoteCalculatorProps {
  onLoadIntoQuoteEngine: (standards: string[], employeeCount: string, serviceScope: string) => void;
  onOpenExpressBooking: () => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  onLoadIntoQuoteEngine,
  onOpenExpressBooking
}) => {
  const [selectedStandards, setSelectedStandards] = useState<string[]>(['ISO 9001:2015 (QMS)']);
  const [employeeSize, setEmployeeSize] = useState<string>('26 - 100 Employees');
  const [serviceScope, setServiceScope] = useState<string>('Full Consulting + Training + Internal Audit');

  const standardsOptions = [
    'ISO 9001:2015 (QMS)',
    'ISO 27001:2022 (ISMS)',
    'ISO 42001:2023 (AI Governance)',
    'ISO 13485:2016 (Medical Devices)',
    'ISO 14001:2015 (EMS)',
    'ISO 45001:2018 (OH&S)',
    'IATF 16949:2016 (Automotive)',
    'AS9100 Rev D (Aerospace)',
    'ISO 20000-1 (ITSM)',
    'ISO 22301 (BCMS)',
    'ISO 31000 (Risk Training)',
  ];

  const employeeSizes = [
    '1 - 25 Employees',
    '26 - 100 Employees',
    '101 - 500 Employees',
    '500+ Enterprise',
  ];

  const scopeOptions = [
    'Full Consulting + Training + Internal Audit',
    'Internal Audit & Mock Assessment Only',
    'Corporate Lead Auditor Training Only',
  ];

  const toggleStandard = (code: string) => {
    if (selectedStandards.includes(code)) {
      if (selectedStandards.length > 1) {
        setSelectedStandards(selectedStandards.filter(s => s !== code));
      }
    } else {
      setSelectedStandards([...selectedStandards, code]);
    }
  };

  const getEstimatedDuration = () => {
    let weeks = 6;
    if (selectedStandards.length > 1) weeks += (selectedStandards.length - 1) * 2;
    if (employeeSize === '26 - 100 Employees') weeks += 2;
    if (employeeSize === '101 - 500 Employees') weeks += 4;
    if (employeeSize === '500+ Enterprise') weeks += 8;
    if (serviceScope.includes('Mock Assessment Only')) weeks = Math.max(2, Math.round(weeks * 0.4));
    if (serviceScope.includes('Training Only')) weeks = Math.max(1, Math.round(weeks * 0.25));
    return `${weeks} - ${weeks + 4} Weeks`;
  };

  const getEstimatedArtifacts = () => {
    const count = selectedStandards.length * 12 + (serviceScope.includes('Full') ? 15 : 5);
    return `${count}+ Custom SOPs & Policies`;
  };

  const durationText = getEstimatedDuration();
  const artifactsText = getEstimatedArtifacts();

  return (
    <section id="estimator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0060df]">
            <span className="w-6 h-0.5 bg-[#ff5500] rounded-full" />
            <span>Interactive Planning Tool</span>
            <span className="w-6 h-0.5 bg-[#ff5500] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            ISO Project Timeline & Resource Estimator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select your target standards, organization size, and desired service scope to generate an instant roadmap estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Controls Column (Col 1-7) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">

            {/* 1. Standards */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0060df]" />
                <span>1. Select Target ISO Standards / Frameworks</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {standardsOptions.map((st) => {
                  const isSelected = selectedStandards.includes(st);
                  return (
                    <button
                      key={st}
                      type="button"
                      onClick={() => toggleStandard(st)}
                      className={`text-xs font-semibold px-3 py-2 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-blue-950 to-blue-900 text-white border-blue-900 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:bg-slate-100'
                      }`}
                    >
                      {st}
                      {isSelected && <span className="ml-1.5 text-amber-400 font-bold">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Headcount */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#0060df]" />
                <span>2. Organization Headcount in Scope</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {employeeSizes.map((sz) => {
                  const isSelected = employeeSize === sz;
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setEmployeeSize(sz)}
                      className={`text-xs font-semibold p-2.5 rounded-xl border text-center transition-all tabular-nums ${
                        isSelected
                          ? 'bg-blue-950 text-white border-blue-900 font-bold shadow-xs'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Service Scope */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0060df]" />
                <span>3. Service Level & Scope</span>
              </label>
              <div className="grid grid-cols-1 gap-2">
                {scopeOptions.map((sc) => {
                  const isSelected = serviceScope === sc;
                  return (
                    <button
                      key={sc}
                      type="button"
                      onClick={() => setServiceScope(sc)}
                      className={`text-xs font-bold p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-blue-950 text-white border-blue-900 shadow-sm ring-1 ring-blue-700'
                          : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {sc === 'Full Consulting + Training + Internal Audit' ? (
                        <span>
                          <span className={isSelected ? 'text-sky-300' : 'text-sky-700'}>Full Consulting</span>
                          <span className="text-slate-400 font-normal"> + </span>
                          <span className={isSelected ? 'text-emerald-300' : 'text-emerald-700'}>Training</span>
                          <span className="text-slate-400 font-normal"> + </span>
                          <span className={isSelected ? 'text-amber-300' : 'text-amber-700'}>Internal Audit</span>
                        </span>
                      ) : sc === 'Internal Audit & Mock Assessment Only' ? (
                        <span className={isSelected ? 'text-amber-300' : 'text-amber-700'}>
                          Internal Audit & Mock Assessment Only
                        </span>
                      ) : (
                        <span className={isSelected ? 'text-emerald-300' : 'text-emerald-700'}>
                          Corporate Lead Auditor Training Only
                        </span>
                      )}

                      {isSelected && (
                        <span className="text-amber-300 font-bold text-xs whitespace-nowrap shrink-0">
                          Selected ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Output Column with Subtle Moving Photographic Scrim (Col 8-12) */}
          <div className="lg:col-span-5 relative bg-[#070e22] text-white rounded-3xl p-6 sm:p-8 border border-blue-800/80 shadow-2xl overflow-hidden flex flex-col justify-between space-y-6">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                src={heroEnterpriseHub}
                alt=""
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover animate-ken-burns opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#070e22]/94 via-[#0a183b]/88 to-[#060c1c]/95" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3 border-b border-blue-800/70 pb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff5500] to-amber-500 text-white flex items-center justify-center shadow">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Project Estimation Output</h3>
                  <p className="text-xs text-sky-300">FireMonk Strategic Blueprint</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-950/75 backdrop-blur-sm rounded-2xl p-4 border border-blue-800/70 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium uppercase">Estimated Duration</div>
                    <motion.div
                      key={durationText}
                      initial={{ opacity: 0.5, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl font-black text-amber-400 tabular-nums mt-0.5"
                    >
                      {durationText}
                    </motion.div>
                  </div>
                  <Clock className="w-8 h-8 text-sky-400/80" />
                </div>

                <div className="bg-slate-950/75 backdrop-blur-sm rounded-2xl p-4 border border-blue-800/70 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium uppercase">Deliverable Documentation</div>
                    <motion.div
                      key={artifactsText}
                      initial={{ opacity: 0.5, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-xl font-bold text-white tabular-nums mt-0.5"
                    >
                      {artifactsText}
                    </motion.div>
                  </div>
                  <FileText className="w-8 h-8 text-emerald-400/80" />
                </div>

                <div className="space-y-2 text-xs text-blue-100 bg-blue-950/70 p-4 rounded-xl border border-blue-800/70">
                  <div className="font-bold text-white">Selected Configuration Summary</div>
                  <ul className="space-y-1 text-slate-300 text-xs">
                    <li><strong className="text-sky-300">Standards:</strong> {selectedStandards.join(', ')}</li>
                    <li><strong className="text-sky-300">Headcount:</strong> {employeeSize}</li>
                    <li><strong className="text-sky-300">Scope:</strong> {serviceScope}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2 relative z-10">
              <button
                onClick={() => onLoadIntoQuoteEngine(selectedStandards, employeeSize, serviceScope)}
                className="w-full bg-gradient-to-r from-[#ff5500] to-amber-500 hover:from-[#e64d00] hover:to-amber-600 text-white font-bold py-3.5 px-5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Load Choices Into Proposal Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenExpressBooking}
                className="w-full text-center text-xs text-sky-300 hover:text-white py-2 underline"
              >
                Or schedule a 15-minute lead auditor call
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
