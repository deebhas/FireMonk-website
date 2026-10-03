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
  Lock,
  Smartphone,
  Cpu,
  Trash2,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: string) => void;
  onOpenExpressBooking: () => void;
  onOpenCustomQuote: () => void;
  onOpenStaffPortal: () => void;
  onRequestDataDeletion?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentView,
  onOpenExpressBooking,
  onOpenCustomQuote,
  onOpenStaffPortal,
  onRequestDataDeletion
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand, Statutory Entity & Physical Address Column */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <FireMonkLogo variant="horizontal" size="md" lightText={true} />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Premier corporate advisory firm specializing in <strong className="text-sky-400 font-bold">Consulting</strong>, <strong className="text-amber-400 font-bold">Auditing</strong>, <strong className="text-emerald-400 font-bold">Training</strong>, and <strong className="text-orange-400 font-bold">Digital Transformation Services</strong>. Supporting enterprise ISO compliance, mobile field synchronization, and automated workflows.
            </p>

            {/* Statutory Registered Physical Office Address */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div className="text-slate-300 leading-snug">
                  <span className="font-semibold text-white block">Registered Physical Office:</span>
                  <span>4/461, 2ND Floor, Valamkottil Towers, Thrikkakara, Ernakulam 682021, Kerala, India</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <div className="flex items-center gap-2">
                  <a href="mailto:support@firemonk.org" className="hover:text-amber-400 underline decoration-slate-700">
                    support@firemonk.org
                  </a>
                  <span className="text-slate-600">•</span>
                  <a href="mailto:info@firemonk.org" className="hover:text-amber-400 underline decoration-slate-700">
                    info@firemonk.org
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+91 96454 14333</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-mono text-sky-300">firemonk.org</span>
              </div>
            </div>
          </div>

          {/* Core Services Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Practice Verticals
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => {
                    setCurrentView('standards');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-sky-400" />
                  <span className="text-sky-300 font-semibold">ISO Standards Consulting</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentView('standards');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                  <span className="text-amber-300 font-semibold">Internal Auditing & Mock Audits</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentView('standards');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">Corporate Lead Auditor Training</span>
                </button>
              </li>
              {/* New Service Vertical Link */}
              <li>
                <button 
                  onClick={() => {
                    setCurrentView('digital-transformation');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-orange-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-orange-400" />
                  <span className="text-orange-400 font-bold">Digital Transformation Services</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentView('firesync');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300"
                >
                  <Smartphone className="w-3 h-3 text-orange-400" />
                  <span>FireSync Mobile App (Coming Soon)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentView('industries');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>Industry Compliance Solutions</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setCurrentView('roadmap');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>4-Step Strategic Trust Roadmap</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Popular ISO Standards & Frameworks */}
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

          {/* Practice Scope & Entity Credentials */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Entity Governance & Scope</span>
            </h3>

            <div className="bg-slate-900 rounded-xl p-3.5 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Legal Entity:</span>
                <span className="font-bold text-white font-mono">FireMonk LLP</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Registration:</span>
                <span className="text-slate-300">LLP Act, India</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Services:</span>
                <span className="font-bold flex items-center gap-1 text-[10px]">
                  <span className="text-sky-400">Consulting</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-amber-400">Audit</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-emerald-400">Training</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-orange-400">Digital</span>
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Mobile Ecosystem:</span>
                <span className="text-orange-300 font-semibold">FireSync (In Progress)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Auditors:</span>
                <span className="text-emerald-400 font-semibold">IRCA Certified</span>
              </div>
            </div>

            <div className="text-center text-[11px] text-slate-500 py-1 font-mono">
              <span>App Store & Google Play Developer: FireMonk LLP</span>
            </div>
          </div>

        </div>

        {/* Legal, Privacy & Compliance Links Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          
          {/* Explicit Legal Entity Copyright Statement */}
          <div className="space-y-1 text-center md:text-left">
            <p className="font-semibold text-slate-300">© 2026 FireMonk LLP. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-500">
              Registered Physical Office: 4/461, 2ND Floor, Valamkottil Towers, Thrikkakara, Ernakulam 682021, Kerala, India
            </p>
          </div>

          {/* Statutory Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button 
              onClick={() => {
                setCurrentView('privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="text-slate-300 hover:text-sky-400 font-medium underline underline-offset-4 decoration-slate-700"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">•</span>
            <button 
              onClick={() => {
                setCurrentView('terms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="text-slate-300 hover:text-sky-400 font-medium underline underline-offset-4 decoration-slate-700"
            >
              Terms of Service
            </button>
            <span className="text-slate-700">•</span>
            {onRequestDataDeletion && (
              <button 
                onClick={onRequestDataDeletion} 
                className="text-red-400 hover:text-red-300 font-medium flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>User Data Deletion</span>
              </button>
            )}
            <span className="text-slate-700">•</span>
            <button 
              onClick={onOpenExpressBooking} 
              className="hover:text-amber-400 transition-colors"
            >
              Schedule Consultation
            </button>
            <span className="text-slate-700">•</span>
            <button 
              onClick={onOpenCustomQuote} 
              className="hover:text-amber-400 transition-colors"
            >
              Corporate Proposal
            </button>
            <span className="text-slate-700">•</span>
            <button 
              onClick={onOpenStaffPortal} 
              className="hover:text-slate-200 text-slate-500 flex items-center gap-1 transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Staff Portal</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
