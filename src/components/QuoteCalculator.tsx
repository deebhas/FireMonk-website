import React, { useState } from 'react';
import { 
  Calculator, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Users, 
  Layers, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface QuoteCalculatorProps {
  onLoadIntoQuoteEngine: (standards: string[], employeeCount: string, serviceScope: string) => void;
  onOpenExpressBooking: () => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  onLoadIntoQuoteEngine,
  onOpenExpressBooking
}) => {
  const [selectedStandards, setSelectedStandards] = useState<string[]>(['ISO 9001:2015']);
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
    'Full Advisory + Digital Transformation & Mobile Workflows',
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

  // Estimate duration
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

  return (
    <section id="estimator" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="bg-sky-100 text-sky-900 font-bold text-xs uppercase px-3 py-1 rounded-full border border-sky-200">
            Interactive Planning Tool
          </span>
          <h2 className="text-3xl font-black text-blue-950 tracking-tight">
            ISO Project Timeline & Resource Estimator
          </h2>
          <p className="text-slate-600 text-sm">
            Select your target standards, organization size, and desired service level to generate an instant project roadmap estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Col 1-7) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* 1. Target Standards */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-600" />
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
                          ? 'bg-blue-900 text-white border-blue-900 shadow-2xs'
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

            {/* 2. Employee Count */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-600" />
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
                      className={`text-xs font-semibold p-2.5 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'bg-blue-900 text-white border-blue-900 font-bold shadow-2xs'
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
                <ShieldCheck className="w-4 h-4 text-sky-600" />
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
                      className={`text-xs font-bold p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-blue-950 text-white border-blue-900 shadow-sm ring-1 ring-blue-700'
                          : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50'
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
                      {isSelected && <span className="text-amber-400 font-bold text-xs bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">Selected ✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Column (Col 8-12) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-800 shadow-xl space-y-6">
            
            <div className="flex items-center gap-3 border-b border-blue-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Project Estimation Output</h3>
                <p className="text-xs text-blue-200">FireMonk Strategic Blueprint</p>
              </div>
            </div>

            {/* Dynamic Estimates */}
            <div className="space-y-4">
              
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-blue-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase">Estimated Duration</div>
                  <div className="text-2xl font-black text-amber-400 font-mono mt-0.5">
                    {getEstimatedDuration()}
                  </div>
                </div>
                <Clock className="w-8 h-8 text-sky-400/80" />
              </div>

              <div className="bg-slate-900/90 rounded-2xl p-4 border border-blue-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase">Deliverable Documentation</div>
                  <div className="text-xl font-bold text-white font-mono mt-0.5">
                    {getEstimatedArtifacts()}
                  </div>
                </div>
                <FileText className="w-8 h-8 text-emerald-400/80" />
              </div>

              <div className="space-y-1.5 text-xs text-blue-100 bg-blue-900/50 p-3.5 rounded-xl border border-blue-800">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Selected Configuration Summary:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                  <li>Standards: {selectedStandards.join(', ')}</li>
                  <li>Headcount: {employeeSize}</li>
                  <li>Scope: {serviceScope}</li>
                </ul>
              </div>

            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => onLoadIntoQuoteEngine(selectedStandards, employeeSize, serviceScope)}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 text-white font-bold py-3.5 px-5 rounded-xl text-sm transition-all shadow flex items-center justify-center gap-2"
              >
                <span>Load Choices Into Official Quote Request</span>
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
