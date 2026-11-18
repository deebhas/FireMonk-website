import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STANDARDS_DATA } from '../data/standardsData';
import { StandardItem } from '../types';
import {
  Search,
  Clock,
  CheckCircle2,
  ArrowRight,
  X,
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
    <section id="standards" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0060df]">
            <span className="w-6 h-0.5 bg-[#ff5500] rounded-full" />
            <span>Comprehensive Regulatory Directory</span>
            <span className="w-6 h-0.5 bg-[#ff5500] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Browse Management System Standards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            FireMonk delivers specialized{' '}
            <strong className="text-sky-700 font-bold">Consulting</strong>,{' '}
            <strong className="text-amber-700 font-bold">Internal Auditing</strong>, and{' '}
            <strong className="text-emerald-700 font-bold">Corporate Lead Auditor Training</strong>{' '}
            across major international standards and industry frameworks.
          </p>
        </motion.div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm space-y-4 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:w-96 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search standard (e.g. ISO 27001, QMS, 42001)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-slate-50/70"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 md:pb-0">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-semibold px-3.5 py-2 rounded-xl border whitespace-nowrap shrink-0 transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-950 to-blue-900 text-white border-blue-900 shadow-xs'
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="tabular-nums">
              Showing <strong className="text-slate-800">{filteredStandards.length}</strong> standards & frameworks
            </span>
            <span className="text-amber-700 font-medium">
              Note: ISO 31000 is offered as Executive Training Only
            </span>
          </div>
        </div>

        {/* Standards Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStandards.map((st) => (
            <motion.div
              key={st.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400/70 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Vibrant Top Accent Hairline on Popular / Hover */}
              <div
                className={`absolute inset-x-0 top-0 h-1 transition-opacity ${
                  st.popular
                    ? 'bg-gradient-to-r from-[#ff5500] via-amber-400 to-[#0060df] opacity-100'
                    : 'bg-gradient-to-r from-[#0060df] to-sky-400 opacity-0 group-hover:opacity-100'
                }`}
              />

              <div className="space-y-3">
                {/* Clean Unboxed Metadata Line */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-semibold text-[#0060df] truncate">
                    {st.category}
                  </span>
                  {st.popular && (
                    <span className="text-[11px] font-bold text-[#ff5500] whitespace-nowrap shrink-0">
                      Core Standard
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-black text-blue-950 tracking-tight group-hover:text-[#0060df] transition-colors">
                    {st.code}
                  </h3>
                  <h4 className="text-sm font-bold text-slate-800 leading-snug mt-0.5">
                    {st.name}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {st.shortDesc}
                </p>

                {/* Clean Inline Service Disciplines */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-1 text-[11px] font-bold">
                  {st.services.map((srv, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && <span className="text-slate-300" aria-hidden="true">·</span>}
                      <span
                        className={
                          srv === 'Consulting'
                            ? 'text-sky-700'
                            : srv === 'Auditing'
                            ? 'text-amber-700'
                            : 'text-emerald-700'
                        }
                      >
                        {srv}
                      </span>
                    </React.Fragment>
                  ))}
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-2.5 border-t border-slate-100 tabular-nums">
                  <Clock className="w-3.5 h-3.5 text-[#0060df]" />
                  <span>
                    Timeline: <strong className="text-slate-800">{st.typicalTimeline}</strong>
                  </span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedStandardModal(st)}
                  className="text-xs font-bold text-blue-950 hover:text-[#0060df] transition-colors whitespace-nowrap shrink-0"
                >
                  View Deliverables
                </button>
                <button
                  onClick={() => onOpenCustomQuote(st.code)}
                  className="bg-gradient-to-r from-[#ff5500] to-amber-500 hover:from-[#e64d00] hover:to-amber-600 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-2xs hover:shadow flex items-center gap-1 whitespace-nowrap shrink-0"
                >
                  <span>Get Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Standard Details Modal */}
        <AnimatePresence>
          {selectedStandardModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 relative my-8"
              >
                <button
                  onClick={() => setSelectedStandardModal(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2 border-b border-slate-200 pb-4 pr-10">
                  <div className="text-xs font-bold text-[#0060df]">
                    {selectedStandardModal.category}
                  </div>
                  <h3 className="text-2xl font-black text-blue-950 tracking-tight">
                    {selectedStandardModal.code}: {selectedStandardModal.name}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-2 pt-1 tabular-nums">
                    <Clock className="w-3.5 h-3.5 text-[#0060df]" />
                    <span>
                      Typical Execution Timeline: <strong>{selectedStandardModal.typicalTimeline}</strong>
                    </span>
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Overview</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedStandardModal.fullDesc}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">FireMonk Practice Scope</h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
                    {selectedStandardModal.services.map((srv, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-lg border ${
                          srv === 'Consulting'
                            ? 'bg-sky-50 text-sky-900 border-sky-200'
                            : srv === 'Auditing'
                            ? 'bg-amber-50 text-amber-900 border-amber-200'
                            : 'bg-emerald-50 text-emerald-900 border-emerald-200'
                        }`}
                      >
                        {srv}
                      </span>
                    ))}
                    {selectedStandardModal.isTrainingOnly && (
                      <span className="text-xs font-bold bg-amber-50 text-amber-900 px-3 py-1 rounded-lg border border-amber-200">
                        Guidance Framework · Executive Training Only
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Core Clauses & Focus Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedStandardModal.keyClauses.map((clause, idx) => (
                      <div key={idx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0060df] shrink-0" />
                        <span className="font-semibold text-slate-800">{clause}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Documentation Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedStandardModal.deliverables.map((del, idx) => (
                      <div key={idx} className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 flex items-center gap-2 text-blue-950 font-medium">
                        <FileText className="w-4 h-4 text-blue-900 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      const code = selectedStandardModal.code;
                      setSelectedStandardModal(null);
                      onOpenCustomQuote(code);
                    }}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#ff5500] to-amber-500 hover:from-[#e64d00] text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Proposal for {selectedStandardModal.code}</span>
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
