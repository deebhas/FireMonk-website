import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Calendar, 
  FileText, 
  Building2, 
  Users,
  Target,
  Smartphone,
  Cpu,
  Layers
} from 'lucide-react';

interface HeroProps {
  onOpenExpressBooking: () => void;
  onOpenCustomQuote: () => void;
  setCurrentView: (view: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenExpressBooking,
  onOpenCustomQuote,
  setCurrentView
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950/80 to-slate-900 text-slate-100 pt-10 pb-20 border-b border-slate-800">
      
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Product Announcement Bar for FireSync Mobile App */}
        <div className="mb-6 flex justify-center lg:justify-start">
          <button
            onClick={() => {
              setCurrentView('firesync');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-sky-500/20 border border-orange-500/40 hover:border-orange-400 px-4 py-1.5 rounded-full text-xs font-semibold text-orange-200 hover:text-white transition-all shadow-sm backdrop-blur"
          >
            <Smartphone className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-orange-300">Announcing FireSync:</span>
            <span>Coming Soon to Google Play & Apple App Store</span>
            <ArrowRight className="w-3 h-3 text-orange-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-950/70 border border-blue-800/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-200 shadow-sm backdrop-blur">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>FireMonk LLP • Management Systems & Digital Transformation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-100 leading-[1.15] font-sans">
              Architecting Certified Quality, Safety & Digital Management Systems.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              End-to-end Management Systems <strong className="text-sky-400 font-bold">Consulting</strong>, <strong className="text-amber-400 font-bold">Auditing</strong>, <strong className="text-emerald-400 font-bold">Training</strong>, and <strong className="text-orange-400 font-bold">Digital Transformation Services</strong> across 25+ international standards including ISO 9001, ISO 27001, ISO 42001 (AI), ISO 13485, and IATF 16949.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-200">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>End-to-End Implementation Support</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IRCA Certified Lead Auditors</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Digital Modernization & Mobile Workflows</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pre-Audit Review & Mock Gap Assessments</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenExpressBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Express Consultation</span>
              </button>

              <button
                onClick={onOpenCustomQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-900/90 hover:bg-blue-800 text-white font-semibold px-6 py-3.5 rounded-xl text-base border border-blue-700 transition-all shadow hover:shadow-md"
              >
                <FileText className="w-5 h-5 text-sky-400" />
                <span>Request Custom Corporate Quote</span>
              </button>
            </div>

            {/* Quick Link Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <span className="text-slate-400 font-medium">Quick Standards:</span>
              <button onClick={() => setCurrentView('standards')} className="bg-blue-900/60 hover:bg-blue-800 text-sky-200 px-2.5 py-1 rounded-md border border-blue-800">
                ISO 9001 (QMS)
              </button>
              <button onClick={() => setCurrentView('standards')} className="bg-blue-900/60 hover:bg-blue-800 text-sky-200 px-2.5 py-1 rounded-md border border-blue-800">
                ISO 27001 (ISMS)
              </button>
              <button onClick={() => setCurrentView('standards')} className="bg-blue-900/60 hover:bg-blue-800 text-sky-200 px-2.5 py-1 rounded-md border border-blue-800">
                ISO 42001 (AI)
              </button>
              <button 
                onClick={() => {
                  setCurrentView('digital-transformation');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="bg-orange-950/70 hover:bg-orange-900 text-orange-200 px-2.5 py-1 rounded-md border border-orange-800 font-bold"
              >
                Digital Transformation
              </button>
            </div>

          </div>

          {/* Hero Feature Card / Stats Grid (Col 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Interactive Card */}
            <div className="bg-slate-900/90 border border-blue-800 rounded-2xl p-6 shadow-2xl backdrop-blur relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Full Spectrum Capability</h3>
                    <p className="text-[10px] font-bold">
                      <span className="text-sky-400">Consulting</span> <span className="text-slate-600">•</span> <span className="text-amber-400">Auditing</span> <span className="text-slate-600">•</span> <span className="text-emerald-400">Training</span> <span className="text-slate-600">•</span> <span className="text-orange-400">Digital</span>
                    </p>
                  </div>
                </div>
                <span className="text-[11px] bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full font-mono border border-emerald-800 font-bold">
                  Active
                </span>
              </div>

              {/* Service Matrix List with 4 Pillars */}
              <div className="py-4 space-y-2.5">
                
                {/* 1. Consulting */}
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-sky-950 text-sky-400 border border-sky-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-sky-300">Management Systems Consulting</h4>
                      <span className="text-[10px] text-sky-400 font-mono font-bold">100% Custom</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                      Process mapping, policy architecture, risk matrices, and SOP design tailored to your operations.
                    </p>
                  </div>
                </div>

                {/* 2. Audits */}
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-amber-950 text-amber-400 border border-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-amber-300">Internal Audits & Gap Reviews</h4>
                      <span className="text-[10px] text-amber-400 font-mono font-bold">Simulation</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                      Realistic mock audits to uncover and fix non-conformities before accredited CB inspectors arrive.
                    </p>
                  </div>
                </div>

                {/* 3. Training */}
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-emerald-300">Corporate & Lead Auditor Training</h4>
                      <span className="text-[10px] text-emerald-400 font-mono font-bold">Certified</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                      Awareness, internal auditor qualification, and leadership workshops for all ISO standards.
                    </p>
                  </div>
                </div>

                {/* 4. Digital Transformation Services */}
                <div className="p-2.5 bg-slate-950 rounded-xl border border-orange-900/60 bg-gradient-to-r from-orange-950/20 to-slate-950 flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-orange-950 text-orange-400 border border-orange-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-orange-300">Digital Transformation Services</h4>
                      <span className="text-[10px] text-orange-400 font-mono font-bold">Software & Mobile</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                      A division of FireMonk LLP that designs, builds, and maintains robust software, digital management tools, and mobile ecosystems (FireSync).
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="font-medium text-slate-400">Entity:</span>
                <span className="font-mono text-white font-bold">FireMonk LLP</span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-slate-900/80 border border-blue-900 rounded-xl p-2.5">
                <div className="text-lg font-black text-amber-400 font-mono">25+</div>
                <div className="text-[9px] text-slate-400 uppercase font-semibold">Standards</div>
              </div>
              <div className="bg-slate-900/80 border border-blue-900 rounded-xl p-2.5">
                <div className="text-lg font-black text-sky-400 font-mono">100%</div>
                <div className="text-[9px] text-slate-400 uppercase font-semibold">Readiness</div>
              </div>
              <div className="bg-slate-900/80 border border-blue-900 rounded-xl p-2.5">
                <div className="text-lg font-black text-emerald-400 font-mono">IRCA</div>
                <div className="text-[9px] text-slate-400 uppercase font-semibold">Auditors</div>
              </div>
              <div className="bg-slate-900/80 border border-orange-900/80 rounded-xl p-2.5">
                <div className="text-lg font-black text-orange-400 font-mono">FireSync</div>
                <div className="text-[9px] text-slate-400 uppercase font-semibold">Mobile App</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
