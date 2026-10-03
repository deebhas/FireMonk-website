import React, { useState } from 'react';
import { STANDARDS_DATA } from '../data/standardsData';
import { StandardItem, StandardCategory } from '../types';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Info,
  Sparkles,
  FileText
} from 'lucide-react';

interface StandardsDirectoryProps {
  onOpenCustomQuote: (standardCode?: string) => void;
  onOpenExpressBooking: () => void;
}

export const StandardsDirectory: React.FC<StandardsDirectoryProps> = ({
  onOpenCustomQuote,
  onOpenExpressBooking
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStandardModal, setSelectedStandardModal] = useState<StandardItem | null>(null);

  const categories: string[] = [
    'All',
    'Core ISO',
    'InfoSec, Tech & Privacy',
    'Risk Management',
    'Life Sciences & Pharma',
    'Aerospace & Automotive',
    'Sustainability & Governance'
  ];

  const filteredStandards = STANDARDS_DATA.filter(st => {
    const matchesSearch = 
      st.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || st.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="standards" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="bg-blue-100 text-blue-900 font-bold text-xs uppercase px-3 py-1 rounded-full border border-blue-200">
            Comprehensive Regulatory Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Browse Management System Standards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            FireMonk provides specialized <strong className="text-sky-700 font-bold">Consulting</strong>, <strong className="text-amber-700 font-bold">Internal Auditing</strong>, and <strong className="text-emerald-700 font-bold">Corporate Lead Auditor Training</strong> across all major international standards and industry frameworks.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm space-y-4 mb-10">
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search standard (e.g. ISO 27001, QMS, 42001, Medical)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-slate-50/50"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-semibold px-3.5 py-2 rounded-xl border whitespace-nowrap transition-all ${
                      isSelected
                        ? 'bg-blue-900 text-white border-blue-900 shadow-2xs'
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Quick Count Indicator */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>Showing <strong>{filteredStandards.length}</strong> standards & frameworks</span>
            <span className="text-amber-700 font-medium">Note: ISO 31000 is available as Executive Training Only</span>
          </div>

        </div>

        {/* Standards Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStandards.map((st) => (
            <div
              key={st.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-md transition-all p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {st.popular && (
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-2xs">
                  Popular Standard
                </div>
              )}

              <div className="space-y-3">
                
                {/* Standard Code Header */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                      {st.category}
                    </span>
                    <h3 className="text-lg font-black text-blue-950 tracking-tight mt-2 group-hover:text-sky-600 transition-colors">
                      {st.code}
                    </h3>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-800 leading-snug">
                  {st.name}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {st.shortDesc}
                </p>

                {/* Service Offerings Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {st.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded border uppercase tracking-wider ${
                        srv === 'Consulting'
                          ? 'bg-sky-50 text-sky-800 border-sky-300'
                          : srv === 'Auditing'
                          ? 'bg-amber-50 text-amber-800 border-amber-300'
                          : srv === 'Training' || srv === 'Training Only' || st.isTrainingOnly
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : 'bg-purple-50 text-purple-900 border-purple-200'
                      }`}
                    >
                      {srv}
                    </span>
                  ))}
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>Timeline: <strong>{st.typicalTimeline}</strong></span>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedStandardModal(st)}
                  className="text-xs font-bold text-blue-900 hover:text-sky-600 underline"
                >
                  View Details & Deliverables
                </button>

                <button
                  onClick={() => onOpenCustomQuote(st.code)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-2xs hover:shadow flex items-center gap-1"
                >
                  <span>Get Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Deep Dive Detail Modal */}
        {selectedStandardModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 relative my-8 animate-in zoom-in-95">
              
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedStandardModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 border-b border-slate-200 pb-4 pr-10">
                <span className="text-xs font-mono font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded border border-blue-200">
                  {selectedStandardModal.category}
                </span>
                <h3 className="text-2xl font-black text-blue-950 tracking-tight">
                  {selectedStandardModal.code}: {selectedStandardModal.name}
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-2 pt-1">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>Typical Execution Timeline: <strong>{selectedStandardModal.typicalTimeline}</strong></span>
                </p>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Overview</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedStandardModal.fullDesc}
                </p>
              </div>

              {/* Services offered */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">FireMonk Scope</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStandardModal.services.map((srv, i) => (
                    <span 
                      key={i} 
                      className={`text-xs font-bold px-3 py-1 rounded-lg border ${
                        srv === 'Consulting'
                          ? 'bg-sky-100 text-sky-900 border-sky-300'
                          : srv === 'Auditing' || srv === 'Audit'
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : 'bg-emerald-100 text-emerald-900 border-emerald-300'
                      }`}
                    >
                      {srv}
                    </span>
                  ))}
                  {selectedStandardModal.isTrainingOnly && (
                    <span className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-lg border border-amber-300">
                      Guidance Framework • Executive Training Only
                    </span>
                  )}
                </div>
              </div>

              {/* Key Clauses */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Clauses & Focus Areas</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedStandardModal.keyClauses.map((c, i) => (
                    <div key={i} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span className="font-semibold text-slate-800">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Documentation Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedStandardModal.deliverables.map((d, i) => (
                    <div key={i} className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 flex items-center gap-2 text-blue-950 font-medium">
                      <FileText className="w-4 h-4 text-blue-900 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const code = selectedStandardModal.code;
                    setSelectedStandardModal(null);
                    onOpenCustomQuote(code);
                  }}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Custom Proposal for {selectedStandardModal.code}</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedStandardModal(null);
                    onOpenExpressBooking();
                  }}
                  className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-5 rounded-xl text-sm"
                >
                  Book Discovery Call
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
