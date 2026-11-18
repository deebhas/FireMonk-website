import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { IndustrySector } from '../types';
import {
  Cpu,
  Activity,
  Factory,
  Building2,
  CheckCircle2,
  ShieldAlert,
  FileText,
  Layers
} from 'lucide-react';
import auditFacility from '../assets/images/audit_precision_facility_1795006383319.jpg';
import governanceVault from '../assets/images/governance_security_vault_1795006383889.jpg';

interface IndustryMatrixProps {
  onOpenCustomQuote: (sectorName?: string) => void;
  onOpenExpressBooking: () => void;
}

export const IndustryMatrix: React.FC<IndustryMatrixProps> = ({
  onOpenCustomQuote,
  onOpenExpressBooking
}) => {
  const [selectedSector, setSelectedSector] = useState<IndustrySector>('Tech & Software');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'Factory': return <Factory className="w-5 h-5 text-orange-400" />;
      default: return <Building2 className="w-5 h-5 text-amber-400" />;
    }
  };

  const currentIndustry = INDUSTRIES_DATA.find(i => i.id === selectedSector) || INDUSTRIES_DATA[0];

  const backdropImage =
    selectedSector === 'Tech & Software' || selectedSector === 'Corporate & Infrastructure'
      ? governanceVault
      : auditFacility;

  return (
    <section id="industries" className="py-20 bg-white border-b border-slate-200">
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
            <span>Sector-Specific Compliance Architecture</span>
            <span className="w-6 h-0.5 bg-[#ff5500] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Browse by Industry Sector
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every industry operates under distinct regulatory mandates and customer audit expectations. Explore tailored ISO blueprints for your vertical.
          </p>
        </motion.div>

        {/* Sector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = selectedSector === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedSector(ind.id)}
                className={`relative p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-br from-blue-950 to-[#0d2259] text-white border-blue-800 shadow-lg -translate-y-0.5'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-blue-300'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="industryTabStripe"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff5500] via-amber-400 to-sky-400"
                  />
                )}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isSelected ? 'bg-white/10' : 'bg-white border border-slate-200'
                }`}>
                  {getIcon(ind.iconName)}
                </div>
                <div>
                  <h3 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-blue-950'}`}>
                    {ind.id}
                  </h3>
                  <p className={`text-xs mt-1 tabular-nums ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                    {ind.subSectors.length} Sub-sectors
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Dossier Card with Crossfading Architectural Photography */}
        <div className="relative bg-[#070e22] text-white rounded-3xl p-6 sm:p-10 border border-blue-800/80 shadow-2xl overflow-hidden">
          {/* Dynamic Moving Background Image */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.img
                key={backdropImage}
                src={backdropImage}
                alt={`${currentIndustry.id} infrastructure background`}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 0.24, scale: 1.01 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-cover animate-ken-burns"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-[#060c1c]/95 via-[#081330]/88 to-[#060c1c]/92" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndustry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10"
            >
              {/* Left Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2 border-b border-blue-800/70 pb-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                    <span>Industry Blueprint</span>
                    <span className="text-slate-500" aria-hidden="true">·</span>
                    <span className="text-sky-300">Tailored Compliance Solution</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {currentIndustry.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentIndustry.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Target Sub-Sectors Covered
                  </h4>
                  <p className="text-xs sm:text-sm text-sky-200 font-medium leading-relaxed">
                    {currentIndustry.subSectors.join('  ·  ')}
                  </p>
                </div>

                <div className="bg-slate-950/75 backdrop-blur-sm rounded-2xl p-5 border border-blue-800/70 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <span>Recommended ISO Standards & Frameworks Bundle</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {currentIndustry.recommendedStandards.map((std, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-900/35 p-2.5 rounded-xl border border-blue-800/70 flex items-center gap-2 text-white font-semibold"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{std}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    onClick={() => onOpenCustomQuote(currentIndustry.id)}
                    className="bg-gradient-to-r from-[#ff5500] to-amber-500 hover:from-[#e64d00] hover:to-amber-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap shrink-0"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Proposal for {currentIndustry.id}</span>
                  </button>
                  <button
                    onClick={onOpenExpressBooking}
                    className="bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3 rounded-xl text-sm border border-white/20 transition-colors whitespace-nowrap shrink-0"
                  >
                    Schedule Industry Expert Call
                  </button>
                </div>
              </div>

              {/* Right Challenges & Benefits */}
              <div className="lg:col-span-5 space-y-5">
                <div className="bg-slate-950/75 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                    <span>Key Compliance Hurdles Solved</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {currentIndustry.keyChallenges.map((ch, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-amber-400 font-bold shrink-0">•</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-950/65 backdrop-blur-sm rounded-2xl p-5 border border-blue-800/80 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>FireMonk Strategic Outcomes</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-blue-100">
                    {currentIndustry.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
