import React, { useState } from 'react';
import { FireMonkLogo } from './FireMonkLogo';
import { 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  FileText, 
  Menu, 
  X, 
  Sparkles,
  ShieldAlert,
  Lock,
  Globe,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  onOpenExpressBooking: () => void;
  onOpenCustomQuote: () => void;
  onOpenStaffPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  onOpenExpressBooking,
  onOpenCustomQuote,
  onOpenStaffPortal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'standards', label: 'Browse Standards' },
    { id: 'industries', label: 'Browse Industries' },
    { id: 'roadmap', label: '4-Step Roadmap' },
    { id: 'estimator', label: 'Cost Estimator' },
    { id: 'quote', label: 'Request Proposal' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
  };

  const handleReadinessClick = () => {
    setCurrentView('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const quizElement = document.getElementById('readiness-quiz-section');
      if (quizElement) {
        quizElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 1200, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Utility Statutory Bar */}
      <div className="bg-slate-900/90 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="mailto:info@firemonk.org" className="flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>info@firemonk.org</span>
            </a>
            <span className="text-slate-600">•</span>
            <a href="tel:+919645414333" className="flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+91 96454 14333</span>
            </a>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-sky-300 font-medium text-[11px] bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60">
              <Globe className="w-3 h-3 text-sky-400" />
              <span>Enterprise ISO Advisory Practice</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReadinessClick}
              className="text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1.5 text-[11px] bg-amber-950/60 hover:bg-amber-900/80 px-2.5 py-0.5 rounded border border-amber-800/80 font-bold"
              title="Assess your organization's ISO audit readiness"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>ISO Gap Assessment</span>
            </button>

            <button
              onClick={onOpenExpressBooking}
              className="text-slate-200 hover:text-white transition-colors flex items-center gap-1 text-[11px] bg-blue-900 hover:bg-blue-800 px-2.5 py-0.5 rounded border border-blue-700 font-medium"
              title="Schedule immediate advisory session"
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Fast Advisory</span>
            </button>

            {/* Subtle Staff Access Lock Icon */}
            <button
              onClick={onOpenStaffPortal}
              className="text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800 transition-colors"
              title="FireMonk Staff Portal"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="cursor-pointer group hover:scale-[1.01] transition-transform"
          >
            <FireMonkLogo variant="horizontal" size="md" />
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 border border-blue-200'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenExpressBooking}
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-xs hover:shadow"
            >
              <Calendar className="w-4 h-4 text-[#0060df]" />
              <span>Book Consultation</span>
            </button>

            <button
              onClick={() => {
                handleNavClick('quote');
                onOpenCustomQuote();
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#ff5500] to-[#ea580c] hover:from-[#e64d00] hover:to-[#c2410c] text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>Get Custom Quote</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenExpressBooking}
              className="bg-orange-500 text-white p-2 rounded-lg text-xs font-semibold sm:hidden"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-blue-900 rounded-lg bg-slate-100 hover:bg-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-1.5 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-lg font-semibold text-sm transition-colors ${
                  currentView === item.id
                    ? 'bg-blue-900 text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExpressBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-900 font-semibold py-3 rounded-xl border border-slate-300"
            >
              <Calendar className="w-4 h-4 text-sky-600" />
              <span>Express Consultation Booking</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('quote');
                onOpenCustomQuote();
              }}
              className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 rounded-xl shadow"
            >
              <FileText className="w-4 h-4" />
              <span>Request Custom Corporate Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
