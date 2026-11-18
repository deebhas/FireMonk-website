import React, { useState } from 'react';
import { FireMonkLogo } from './FireMonkLogo';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  FileText, 
  Menu, 
  X, 
  Lock,
  ArrowUpRight
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
    { id: 'standards', label: 'Standards' },
    { id: 'industries', label: 'Industries' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'estimator', label: 'Estimator' },
    { id: 'quote', label: 'Proposal' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-[#060c1c] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-3 flex-wrap text-[11px]">
            <span className="font-semibold text-white tracking-tight">FireMonk LLP</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <a href="mailto:info@firemonk.org" className="flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors">
              <Mail className="w-3 h-3 text-sky-400" />
              <span>info@firemonk.org</span>
            </a>
            <span className="hidden sm:inline-block text-slate-600" aria-hidden="true">·</span>
            <a href="tel:+919645414333" className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors tabular-nums">
              <Phone className="w-3 h-3 text-sky-400" />
              <span>+91 96454 14333</span>
            </a>
            <span className="hidden lg:inline-block text-slate-600" aria-hidden="true">·</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
              <span>Valamkottil Towers, Thrikkakara, Ernakulam, Kerala</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <button
              onClick={handleReadinessClick}
              className="hidden md:inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 font-medium transition-colors whitespace-nowrap shrink-0"
              title="Assess your organization's ISO audit readiness"
            >
              <span>ISO Gap Assessment</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            <span className="hidden md:inline text-slate-700" aria-hidden="true">|</span>

            <button
              onClick={onOpenExpressBooking}
              className="text-sky-300 hover:text-white font-medium transition-colors whitespace-nowrap shrink-0"
              title="Schedule immediate advisory session"
            >
              Fast Advisory
            </button>

            <button
              onClick={onOpenStaffPortal}
              className="text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800 transition-colors"
              title="FireMonk Staff Portal"
              aria-label="Open Staff Portal"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-18">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="text-left group hover:opacity-95 transition-opacity shrink-0"
          >
            <FireMonkLogo variant="horizontal" size="md" />
          </button>

          {/* Zone 2: Clean Typographic Nav Links with Motion Active Underline */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-blue-950'
                      : 'text-slate-600 hover:text-blue-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveUnderline"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute left-3 right-3 bottom-0.5 h-0.5 bg-gradient-to-r from-[#0060df] to-[#ff5500] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenExpressBooking}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-950 hover:bg-slate-100 font-semibold px-3.5 py-2 rounded-xl text-sm transition-colors whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4 text-[#0060df]" />
              <span>Book Consultation</span>
            </button>

            <button
              onClick={() => {
                handleNavClick('quote');
                onOpenCustomQuote();
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#ff5500] to-[#ea580c] hover:from-[#e64d00] hover:to-[#c2410c] text-white font-bold px-4 py-2 rounded-xl text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <FileText className="w-4 h-4" />
              <span>Get Custom Quote</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenExpressBooking}
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-2 rounded-lg text-xs font-semibold sm:hidden"
              title="Book Consultation"
              aria-label="Book Consultation"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-blue-900 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl">
          <div className="flex flex-col gap-1.5 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-lg font-semibold text-sm transition-colors ${
                  currentView === item.id
                    ? 'bg-blue-950 text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-1">
              <button
                onClick={() => handleNavClick('privacy')}
                className="text-left px-4 py-2 text-xs text-slate-600 hover:text-blue-900"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavClick('terms')}
                className="text-left px-4 py-2 text-xs text-slate-600 hover:text-blue-900"
              >
                Terms of Service
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExpressBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-900 font-semibold py-3 rounded-xl border border-slate-300 text-sm"
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
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff5500] to-amber-500 text-white font-bold py-3 rounded-xl shadow text-sm"
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
