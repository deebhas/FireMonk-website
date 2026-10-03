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
  CheckCircle2,
  Smartphone,
  Cpu,
  ShieldCheck
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
    { id: 'digital-transformation', label: 'Digital Transformation', highlight: true },
    { id: 'firesync', label: 'FireSync App', isApp: true },
    { id: 'standards', label: 'Standards' },
    { id: 'industries', label: 'Industries' },
    { id: 'roadmap', label: '4-Step Roadmap' },
    { id: 'quote', label: 'Request Proposal' },
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
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Utility Statutory Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-4 flex-wrap text-[11px] sm:text-xs">
            <span className="font-bold text-white font-mono tracking-tight">FireMonk LLP</span>
            <span className="text-slate-600">•</span>
            <a href="mailto:support@firemonk.org" className="flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>support@firemonk.org</span>
            </a>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <a href="tel:+919645414333" className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+91 96454 14333</span>
            </a>
            <span className="hidden lg:inline-block text-slate-600">•</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400 text-[11px]">
              <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
              <span>Valamkottil Towers, Thrikkakara, Ernakulam, Kerala</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* FireSync App Badge CTA */}
            <button
              onClick={() => handleNavClick('firesync')}
              className="text-orange-300 hover:text-white transition-colors flex items-center gap-1 text-[11px] bg-orange-950/70 hover:bg-orange-900/90 px-2.5 py-0.5 rounded border border-orange-800/80 font-bold"
              title="Explore FireSync Mobile App"
            >
              <Smartphone className="w-3 h-3 text-orange-400" />
              <span>FireSync App</span>
            </button>

            <button
              onClick={handleReadinessClick}
              className="hidden md:flex text-amber-300 hover:text-amber-200 transition-colors items-center gap-1.5 text-[11px] bg-amber-950/60 hover:bg-amber-900/80 px-2.5 py-0.5 rounded border border-amber-800/80 font-semibold"
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
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 border border-blue-200'
                      : item.highlight
                      ? 'text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-extrabold'
                      : item.isApp
                      ? 'text-sky-700 hover:text-sky-800 hover:bg-sky-50 font-bold'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {item.highlight && <Cpu className="w-3.5 h-3.5 text-orange-500" />}
                  {item.isApp && <Smartphone className="w-3.5 h-3.5 text-sky-600" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenExpressBooking}
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-xs hover:shadow"
            >
              <Calendar className="w-4 h-4 text-[#0060df]" />
              <span>Book Consultation</span>
            </button>

            <button
              onClick={() => {
                handleNavClick('quote');
                onOpenCustomQuote();
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#ff5500] to-[#ea580c] hover:from-[#e64d00] hover:to-[#c2410c] text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>Get Proposal</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('firesync')}
              className="bg-orange-500 text-white p-2 rounded-lg text-xs font-semibold sm:hidden"
              title="FireSync App"
            >
              <Smartphone className="w-4 h-4" />
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
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-1.5 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-between ${
                  currentView === item.id
                    ? 'bg-blue-900 text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.highlight && <Cpu className="w-4 h-4 text-orange-500" />}
                  {item.isApp && <Smartphone className="w-4 h-4 text-sky-500" />}
                  <span>{item.label}</span>
                </div>
                {item.highlight && (
                  <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-bold">New</span>
                )}
                {item.isApp && (
                  <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded font-bold">Coming Soon</span>
                )}
              </button>
            ))}

            {/* Statutory Links in Mobile Drawer */}
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
              className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 rounded-xl shadow text-sm"
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
