import React, { useState } from 'react';
import { FireMonkLogo } from './FireMonkLogo';
import { 
  Lock, 
  KeyRound, 
  ShieldCheck, 
  X, 
  Users, 
  Code, 
  Eye, 
  EyeOff, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface StaffPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLeads: () => void;
  onOpenSeo: () => void;
  leadCount: number;
}

const DEFAULT_ADMIN_PIN = 'FireMonk@1234';

export const StaffPortalModal: React.FC<StaffPortalModalProps> = ({
  isOpen,
  onClose,
  onOpenLeads,
  onOpenSeo,
  leadCount
}) => {
  const [enteredPin, setEnteredPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [showPinText, setShowPinText] = useState(false);

  if (!isOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPin === DEFAULT_ADMIN_PIN) {
      setIsUnlocked(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleLock = () => {
    setIsUnlocked(false);
    setEnteredPin('');
    setPinError(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative animate-in zoom-in-95">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {!isUnlocked ? (
          /* Password Authentication Gate */
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-900 text-amber-400 shadow-md">
              <Lock className="w-7 h-7" />
            </div>

            <div>
              <FireMonkLogo size="sm" showTagline={false} />
              <h3 className="text-xl font-black text-blue-950 mt-2">FireMonk Staff Portal</h3>
              <p className="text-xs text-slate-500 mt-1">
                Restricted access for internal FireMonk administrators and technical team.
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-4 text-left pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-blue-800" />
                  <span>Admin Passcode</span>
                </label>
                <div className="relative">
                  <input
                    type={showPinText ? 'text' : 'password'}
                    value={enteredPin}
                    onChange={(e) => {
                      setEnteredPin(e.target.value);
                      if (pinError) setPinError(false);
                    }}
                    placeholder="Enter password..."
                    autoFocus
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-mono tracking-wider focus:outline-none focus:ring-2 ${
                      pinError 
                        ? 'border-red-500 bg-red-50 focus:ring-red-500 text-red-900' 
                        : 'border-slate-300 focus:ring-blue-900'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPinText(!showPinText)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPinText ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {pinError && (
                  <p className="text-xs font-semibold text-red-600 mt-1.5">
                    ❌ Incorrect Admin Passcode. Access denied.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Authenticate Staff Login</span>
              </button>
            </form>
          </div>
        ) : (
          /* Unlocked Admin Hub Options */
          <div className="space-y-5">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 font-mono text-xs px-2.5 py-0.5 rounded-full border border-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Authenticated Admin Mode</span>
              </div>
              <h3 className="text-xl font-black text-blue-950 mt-1">Staff Management Hub</h3>
              <p className="text-xs text-slate-500">
                Select an internal administrative tool below:
              </p>
            </div>

            <div className="space-y-3 pt-2">
              
              {/* Option 1: Leads Registry */}
              <button
                onClick={() => {
                  onClose();
                  onOpenLeads();
                }}
                className="w-full text-left p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-blue-50/80 hover:border-blue-300 transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-900 text-amber-400 rounded-xl group-hover:scale-105 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <span>Client Inquiry & Lead Registry</span>
                      {leadCount > 0 && (
                        <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-full">
                          {leadCount} New
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">View, manage, and export client booking requests & quote submissions.</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-900 group-hover:translate-x-0.5 transition-all" />
              </button>

              {/* Option 2: Technical SEO & Metadata */}
              <button
                onClick={() => {
                  onClose();
                  onOpenSeo();
                }}
                className="w-full text-left p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-blue-50/80 hover:border-blue-300 transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-slate-800 text-sky-400 rounded-xl group-hover:scale-105 transition-transform">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Technical SEO & Schema Inspector</div>
                    <p className="text-xs text-slate-500">Inspect JSON-LD structured data, Open Graph tags & analytics scripts.</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-900 group-hover:translate-x-0.5 transition-all" />
              </button>

            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
              <button
                onClick={handleLock}
                className="text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Lock Portal</span>
              </button>

              <button
                onClick={onClose}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3 py-1.5 rounded-lg"
              >
                Close Hub
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
