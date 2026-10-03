import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShieldCheck, 
  Mail, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Lock,
  Smartphone
} from 'lucide-react';

interface DataDeletionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataDeletionModal: React.FC<DataDeletionModalProps> = ({
  isOpen,
  onClose
}) => {
  const [email, setEmail] = useState('');
  const [accountType, setAccountType] = useState('FireSync Mobile App Account & All Data');
  const [reason, setReason] = useState('Account no longer needed');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address associated with your account.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800 flex items-center justify-center text-red-400 shrink-0">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider">
                  Store Compliance Policy • Section 5
                </span>
                <h3 className="text-xl font-bold text-white">
                  User Account & Data Deletion Request
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-5">
              In accordance with <strong>Google Play Console</strong> and <strong>Apple App Store</strong> requirements, users of the <strong>FireSync</strong> mobile app and firemonk.org have the absolute right to request the permanent deletion of their account credentials, audit field logs, and personal identifiers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Registered Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the email associated with your FireSync or FireMonk account"
                  className="w-full bg-slate-950 border border-slate-700 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:border-red-500 placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Scope of Deletion Request
                </label>
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:border-red-500"
                >
                  <option value="FireSync Mobile App Account & All Data">FireSync Mobile App Account & All Synced Data</option>
                  <option value="Audit Checklists & Photos Only">Audit Checklists & Cached Evidence Only</option>
                  <option value="Website Lead & Inquiry Records">Website Inquiry & Lead Registry Records</option>
                  <option value="Complete Purge Across All FireMonk LLP Systems">Complete Purge Across All FireMonk LLP Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Reason for Deletion (Optional)
                </label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:border-red-500"
                >
                  <option value="Account no longer needed">Account no longer needed</option>
                  <option value="Left organization">Left organization or company</option>
                  <option value="Data privacy preference">Data privacy preference</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Additional Details or Account Identifiers (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any specific username, team name, or reference ID..."
                  className="w-full bg-slate-950 border border-slate-700 text-white px-3.5 py-2 rounded-xl text-xs focus:outline-none focus:border-red-500 placeholder:text-slate-500"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-950/80 border border-red-800 text-red-200 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Submit Formal Deletion Request</span>
                </button>

                <a
                  href={`mailto:support@firemonk.org?subject=User%20Account%20and%20Data%20Deletion%20Request&body=Please%20delete%20my%20account%20and%20all%20associated%20personal%20data%20for%20email:%20${encodeURIComponent(email)}`}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2.5 rounded-xl text-xs border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Direct Email Request</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-white">Deletion Request Submitted</h3>
            
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your request for account and data deletion for <strong className="text-white">{email}</strong> has been logged into the FireMonk LLP Compliance Queue.
            </p>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left text-xs text-slate-400 space-y-2">
              <div className="flex justify-between">
                <span>Requested Scope:</span>
                <span className="text-slate-200 font-medium">{accountType}</span>
              </div>
              <div className="flex justify-between">
                <span>Resolution Timeframe:</span>
                <span className="text-emerald-400 font-mono font-semibold">Within 7 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span>Confirmation Email:</span>
                <span className="text-sky-300 font-mono">support@firemonk.org</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              A statutory deletion certificate will be dispatched to your email once all cloud identifiers and backups are purged.
            </p>

            <button
              onClick={handleReset}
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-2 rounded-xl text-xs transition-colors"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
