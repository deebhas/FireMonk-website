import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { IndustryItem, IndustrySector } from '../types';
import { 
  Cpu, 
  Activity, 
  Factory, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  Sparkles,
  FileText
} from 'lucide-react';

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
      case 'Cpu': return <Cpu className="w-6 h-6 text-sky-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'Factory': return <Factory className="w-6 h-6 text-orange-400" />;
      default: return <Building2 className="w-6 h-6 text-amber-400" />;
    }
  };

  const currentIndustry = INDUSTRIES_DATA.find(i => i.id === selectedSector) || INDUSTRIES_DATA[0];

  return (
    <section id="industries" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="bg-sky-100 text-sky-900 font-bold text-xs uppercase px-3 py-1 rounded-full border border-sky-200">
            Sector-Specific Compliance Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Browse by Industry Sector
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every industry operates under distinct regulatory pressures and customer compliance mandates. Discover tailored ISO standard blueprints for your vertical.
          </p>
        </div>

        {/* Sector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = selectedSector === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedSector(ind.id)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 group ${
                  isSelected
                    ? 'bg-blue-900 text-white border-blue-900 shadow-lg scale-[1.02]'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-blue-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-blue-800' : 'bg-white border border-slate-200'}`}>
                  {getIcon(ind.iconName)}
                </div>

                <div>
                  <h3 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-blue-950'}`}>
                    {ind.id}
                  </h3>
                  <p className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                    {ind.subSectors.length} Sub-sectors
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Matrix Panel */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-blue-800 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (Col 1-7): Sub-sectors & Recommended Bundle */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2 border-b border-blue-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/80 border border-amber-800 px-2.5 py-1 rounded">
                    INDUSTRY MATRIX
                  </span>
                  <span className="text-xs text-sky-300 font-semibold">Tailored Compliance Solution</span>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {currentIndustry.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentIndustry.description}
                </p>
              </div>

              {/* Sub-sectors Badges */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Target Sub-Sectors Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {currentIndustry.subSectors.map((sub, i) => (
                    <span key={i} className="text-xs font-medium bg-blue-950 text-sky-200 border border-blue-800 px-3 py-1 rounded-lg">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended Standards Bundle */}
              <div className="bg-slate-950 rounded-2xl p-5 border border-blue-800/80 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Recommended ISO Standards & Frameworks Bundle</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentIndustry.recommendedStandards.map((st, i) => (
                    <div key={i} className="bg-blue-900/40 p-2.5 rounded-xl border border-blue-800/80 flex items-center gap-2 text-white font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenCustomQuote(currentIndustry.id)}
                  className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Proposal for {currentIndustry.id}</span>
                </button>

                <button
                  onClick={onOpenExpressBooking}
                  className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-xl text-sm border border-blue-700"
                >
                  Schedule Industry Expert Call
                </button>
              </div>

            </div>

            {/* Right Column (Col 8-12): Industry Challenges & FireMonk Benefits */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Challenges */}
              <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>Key Compliance Hurdles Solved</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {currentIndustry.keyChallenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold shrink-0">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategic Benefits */}
              <div className="bg-blue-950/60 rounded-2xl p-5 border border-blue-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>FireMonk Strategic Outcomes</span>
                </h4>
                <ul className="space-y-2 text-xs text-blue-100">
                  {currentIndustry.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
