import React, { useState } from 'react';
import { 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  Bell, 
  ArrowRight, 
  ShieldCheck, 
  WifiOff, 
  Camera, 
  ClipboardCheck, 
  RefreshCw, 
  Check, 
  Apple, 
  Play,
  Layers,
  Lock,
  ExternalLink
} from 'lucide-react';

interface FireSyncAppBannerProps {
  onOpenPrivacy?: () => void;
  onOpenDataDeletion?: () => void;
}

export const FireSyncAppBanner: React.FC<FireSyncAppBannerProps> = ({
  onOpenPrivacy,
  onOpenDataDeletion
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [platformPreference, setPlatformPreference] = useState<'both' | 'ios' | 'android'>('both');

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setIsSubscribed(true);
  };

  return (
    <section id="firesync-app-section" className="py-16 bg-gradient-to-b from-slate-900 via-blue-950/70 to-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Coming Soon Header Card */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-8 lg:p-12 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Coming Soon Announcement Pill */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/40 px-4 py-1.5 rounded-full text-xs font-bold text-orange-300">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>OFFICIAL PRODUCT ANNOUNCEMENT • FIRESYNC</span>
              </div>

              {/* Exact Required Announcement Copy Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
                FireSync Mobile App — Coming Soon to the Google Play Store and Apple App Store. Experience seamless digital synchronization for your management and auditing workflows.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Developed in-house by the <strong className="text-sky-300">Digital Transformation Division of FireMonk LLP</strong>, FireSync bridges auditors, lead consultants, and compliance managers in real time. Eliminate manual clipboard audits, paper evidence, and delayed reporting with native mobile synchronization.
              </p>

              {/* App Store & Play Store Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                
                {/* Apple App Store Badge */}
                <div className="flex items-center gap-3 bg-black/80 hover:bg-black text-white px-5 py-3 rounded-2xl border border-slate-700 shadow-md">
                  <Apple className="w-7 h-7 text-white shrink-0" />
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold leading-none">
                      Coming Soon to
                    </span>
                    <span className="text-sm font-bold text-white leading-tight">
                      Apple App Store
                    </span>
                  </div>
                </div>

                {/* Google Play Store Badge */}
                <div className="flex items-center gap-3 bg-black/80 hover:bg-black text-white px-5 py-3 rounded-2xl border border-slate-700 shadow-md">
                  <div className="w-7 h-7 flex items-center justify-center text-emerald-400">
                    <Play className="w-6 h-6 fill-current text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold leading-none">
                      Coming Soon to
                    </span>
                    <span className="text-sm font-bold text-white leading-tight">
                      Google Play
                    </span>
                  </div>
                </div>

                {/* Corporate Verification Pill */}
                <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Entity: FireMonk LLP</span>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs text-slate-200 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Real-time audit checklist sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Offline-first audit field capture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Clause-by-clause non-conformance logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Instant PDF audit report generation</span>
                </div>
              </div>

              {/* Pre-launch Notification Form */}
              <div className="pt-4 border-t border-slate-800">
                {!isSubscribed ? (
                  <form onSubmit={handleNotifySubmit} className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold flex items-center gap-1.5">
                        <Bell className="w-3.5 h-3.5 text-amber-400" />
                        <span>Get Notified on Launch Day & Request Early Beta Access</span>
                      </span>
                      <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400">
                        <button 
                          type="button" 
                          onClick={() => setPlatformPreference('ios')}
                          className={`px-2 py-0.5 rounded ${platformPreference === 'ios' ? 'bg-sky-500 text-white' : 'hover:text-white'}`}
                        >
                          iOS
                        </button>
                        <span>|</span>
                        <button 
                          type="button" 
                          onClick={() => setPlatformPreference('android')}
                          className={`px-2 py-0.5 rounded ${platformPreference === 'android' ? 'bg-sky-500 text-white' : 'hover:text-white'}`}
                        >
                          Android
                        </button>
                        <span>|</span>
                        <button 
                          type="button" 
                          onClick={() => setPlatformPreference('both')}
                          className={`px-2 py-0.5 rounded ${platformPreference === 'both' ? 'bg-sky-500 text-white' : 'hover:text-white'}`}
                        >
                          Both
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <input 
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Enter corporate email (e.g., quality@company.com)"
                        className="flex-1 bg-slate-950 border border-slate-700 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-orange-500 placeholder:text-slate-500"
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
                      >
                        <span>Notify Me</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="p-4 bg-emerald-950/70 border border-emerald-800 rounded-xl flex items-center gap-3 text-emerald-300 text-xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-bold">You're on the FireSync Priority Invitation List!</p>
                      <p className="text-slate-300 mt-0.5">We will send early access invitation instructions for {emailInput} as soon as store builds are approved.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Compliance & Store Policy Quick Links */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
                {onOpenPrivacy && (
                  <button onClick={onOpenPrivacy} className="hover:text-sky-300 underline underline-offset-2">
                    Privacy Policy
                  </button>
                )}
                <span>•</span>
                {onOpenDataDeletion && (
                  <button onClick={onOpenDataDeletion} className="hover:text-sky-300 underline underline-offset-2">
                    User Data Deletion Policy
                  </button>
                )}
                <span>•</span>
                <span className="text-slate-400">Support: support@firemonk.org</span>
              </div>

            </div>

            {/* Right Mockup Preview (Col 8-12) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[9/18.5] bg-slate-950 rounded-[42px] border-4 border-slate-700 shadow-2xl p-4 flex flex-col justify-between overflow-hidden">
                
                {/* Phone Speaker Notch */}
                <div className="w-32 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-3 h-3 bg-slate-900 rounded-full mr-2" />
                  <div className="w-10 h-1 bg-slate-700 rounded-full" />
                </div>

                {/* Mobile App Header */}
                <div className="space-y-3 flex-1 overflow-hidden">
                  
                  {/* FireSync Header */}
                  <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-xs">
                        FS
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1">
                          <span>FireSync</span>
                          <span className="text-[9px] bg-orange-950 text-orange-400 px-1 rounded font-mono">v1.0</span>
                        </div>
                        <p className="text-[9px] text-slate-400">FireMonk LLP</p>
                      </div>
                    </div>
                    <span className="text-[9px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Synced
                    </span>
                  </div>

                  {/* Active Audit Card */}
                  <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-slate-400">Active Audit:</span>
                      <span className="text-sky-400 font-mono font-bold">ISO 9001:2015</span>
                    </div>
                    <div className="text-xs font-bold text-white">Clause 8.5 Production Control</div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div className="bg-orange-500 h-1.5 rounded-full w-4/5" />
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-400">
                      <span>16/20 Checked</span>
                      <span className="text-emerald-400">0 Critical NC</span>
                    </div>
                  </div>

                  {/* Audit Items Mini-List */}
                  <div className="space-y-1.5 text-[11px]">
                    <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300">Calibration Records</span>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300">Traceability Identifiers</span>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="bg-orange-950/40 p-2 rounded-lg border border-orange-900/50 flex items-center justify-between">
                      <span className="text-orange-200">Observation Captured</span>
                      <Camera className="w-3.5 h-3.5 text-orange-400" />
                    </div>
                  </div>

                  {/* Mobile Sync Indicator */}
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 text-[10px] text-slate-300 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <WifiOff className="w-3 h-3 text-amber-400" />
                        <span>Offline Buffer:</span>
                      </span>
                      <span className="text-emerald-400 font-mono font-semibold">Enabled</span>
                    </div>
                    <p className="text-[9px] text-slate-400">
                      Audits continue uninterrupted without connectivity. Automatic cloud synchronization on reconnect.
                    </p>
                  </div>

                </div>

                {/* Bottom Virtual Home Indicator */}
                <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2" />

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
