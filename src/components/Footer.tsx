import React from 'react';
import { FireMonkLogo } from './FireMonkLogo';
import { 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  FileCheck2, 
  Award,
  ArrowRight,
  Lock
} from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: string) => void;
  onOpenExpressBooking: () => void;
  onOpenCustomQuote: () => void;
  onOpenStaffPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentView,
  onOpenExpressBooking,
  onOpenCustomQuote,
  onOpenStaffPortal
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Address Column */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <FireMonkLogo variant="horizontal" size="md" lightText={true} />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Premier management system <strong className="text-sky-400 font-bold">consulting</strong>, <strong className="text-amber-400 font-bold">auditing</strong>, and <strong className="text-emerald-400 font-bold">training</strong> firm. Supporting enterprise ISO compliance, regulatory readiness, and process excellence.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Enterprise Consulting & Auditor Training</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@firemonk.org" className="hover:text-amber-400 underline decoration-slate-700">
                  info@firemonk.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+91 96454 14333</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-mono text-sky-300">firemonk.org</span>
              </div>
            </div>
          </div>

          {/* Core Services Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Management Services
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => setCurrentView('standards')} 
                  className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-sky-400" />
                  <span className="text-sky-300 font-semibold">ISO Standards Consulting</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentView('standards')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                  <span className="text-amber-300 font-semibold">Internal Auditing & Mock Audits</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentView('standards')} 
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">Corporate Lead Auditor Training</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentView('industries')} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>Industry Compliance Solutions</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentView('roadmap')} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>4-Step Strategic Trust Roadmap</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentView('estimator')} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>ISO Project Cost Estimator</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Popular ISO Standards */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Popular Frameworks
            </h3>
            <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">ISO 9001:2015 (Quality)</span>
              <span className="text-slate-300 font-medium">ISO 27001:2022 (Information Security)</span>
              <span className="text-slate-300 font-medium">ISO 42001:2023 (AI Governance)</span>
              <span className="text-slate-300 font-medium">ISO 13485 (Medical Devices)</span>
              <span className="text-slate-300 font-medium">IATF 16949 & AS9100</span>
              <span className="text-slate-300 font-medium">ISO 14001 & ISO 45001</span>
              <span className="text-slate-300 font-medium">ESG & BRSR Sustainability</span>
              <span className="text-slate-300 font-medium text-amber-400">ISO 31000 (Training Only)</span>
            </div>
          </div>

          {/* Practice Scope & Engagement */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-sky-400" />
              <span>Practice Scope & Capabilities</span>
            </h3>

            <div className="bg-slate-900 rounded-xl p-3.5 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Services:</span>
                <span className="font-bold flex items-center gap-1 text-[11px]">
                  <span className="text-sky-400">Consulting</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-amber-400">Audit</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-emerald-400">Training</span>
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Delivery:</span>
                <span className="text-sky-300 font-semibold">Virtual & On-Site</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Inquiries:</span>
                <a href="mailto:info@firemonk.org" className="text-sky-300 hover:underline">info@firemonk.org</a>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Advisory:</span>
                <span className="text-emerald-400 font-semibold">25+ ISO Frameworks</span>
              </div>
            </div>

            <div className="text-center text-[11px] text-slate-500 py-1 font-mono">
              <span>ISO 9001 • ISO 27001 • ISO 42001 Practice</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} FireMonk. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenExpressBooking} className="hover:text-amber-400">
              Schedule Consultation
            </button>
            <span>•</span>
            <button onClick={onOpenCustomQuote} className="hover:text-amber-400">
              Request Corporate Quote
            </button>
            <span>•</span>
            <button onClick={onOpenStaffPortal} className="hover:text-slate-200 text-slate-500 flex items-center gap-1 transition-colors">
              <Lock className="w-3 h-3" />
              <span>Staff Portal</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
