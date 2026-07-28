import React, { useState } from 'react';
import { LeadSubmission } from '../types';
import { FireMonkLogo } from './FireMonkLogo';
import { 
  Users, 
  Search, 
  Download, 
  X, 
  Lock,
  KeyRound,
  ShieldCheck,
  Eye,
  EyeOff,
  Sparkles
} from 'lucide-react';

interface LeadsPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  submissions: LeadSubmission[];
  onUpdateStatus: (id: string, status: LeadSubmission['status']) => void;
  onClearSubmissions: () => void;
}

const DEFAULT_ADMIN_PIN = 'FireMonk@1234';

export const LeadsPortalModal: React.FC<LeadsPortalModalProps> = ({
  isOpen,
  onClose,
  submissions,
  onUpdateStatus,
  onClearSubmissions
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('All');
  
  // Auth state
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

  const filtered = submissions.filter(s => {
    const matchesSearch = 
      s.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.mobile.includes(searchTerm) ||
      (s.companyName && s.companyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      s.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === 'All' || s.type === filterType;

    return matchesSearch && matchesType;
  });

  const handleExportCSV = () => {
    if (submissions.length === 0) return;

    const headers = ['ID', 'Date', 'Type', 'Name', 'Email', 'Mobile', 'Company', 'Status', 'Details'];
    const rows = submissions.map(s => [
      s.id,
      `"${s.submittedAt}"`,
      `"${s.type}"`,
      `"${s.fullName}"`,
      `"${s.email}"`,
      `"${s.mobile}"`,
      `"${s.companyName || ''}"`,
      `"${s.status}"`,
      `"${(s.selectedStandards || [s.consultationType]).join('; ')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `FireMonk_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Password Login Screen
  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative animate-in zoom-in-95">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-900 text-amber-400 shadow-md">
              <Lock className="w-7 h-7" />
            </div>

            <div>
              <FireMonkLogo size="sm" showTagline={false} />
              <h3 className="text-xl font-black text-blue-950 mt-2">Admin Leads Portal Access</h3>
              <p className="text-xs text-slate-500 mt-1">
                Enter your secure administrator password to view client inquiries and booking data.
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
                <span>Unlock Portal</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Unlocked Admin Dashboard View
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative my-8 animate-in zoom-in-95">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 pr-12">
          <div className="space-y-2">
            <FireMonkLogo size="sm" />
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded border border-blue-200">
                <Users className="w-3.5 h-3.5 text-blue-700" />
                <span>FIREMONK SECURE LEAD PORTAL</span>
              </div>
              <h3 className="text-2xl font-black text-blue-950 tracking-tight mt-1">
                Client Inquiries & Booking Registry ({submissions.length})
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLock}
              className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded-xl text-xs"
              title="Lock Admin Portal"
            >
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>Lock Portal</span>
            </button>

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters & Export Bar */}
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search leads by name, email, ref ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="p-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
            >
              <option value="All">All Types</option>
              <option value="Custom Quote">Custom Quote</option>
              <option value="Express Booking">Express Booking</option>
            </select>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleExportCSV}
              disabled={submissions.length === 0}
              className="flex items-center gap-1.5 bg-blue-900 hover:bg-blue-800 disabled:opacity-50 text-white font-bold px-4 py-2 rounded-xl text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            {submissions.length > 0 && (
              <button
                onClick={onClearSubmissions}
                className="text-xs text-red-600 hover:text-red-700 underline px-2 font-medium"
              >
                Clear All
              </button>
            )}
          </div>

        </div>

        {/* Table / List */}
        <div className="max-h-96 overflow-y-auto border border-slate-200 rounded-2xl">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs space-y-2">
              <Sparkles className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="font-semibold text-slate-700">No inquiry submissions recorded yet.</p>
              <p>Submissions from Pathway A (Express Booking) and Pathway B (Custom Quote) will appear here instantly.</p>
            </div>
          ) : (
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-blue-950 font-bold uppercase tracking-wider text-[10px] sticky top-0 border-b border-slate-200">
                <tr>
                  <th className="p-3">Ref ID / Date</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Company / Details</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/80">
                    <td className="p-3 font-mono">
                      <div className="font-bold text-blue-950">{s.id}</div>
                      <div className="text-[10px] text-slate-400">{s.submittedAt}</div>
                    </td>

                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        s.type === 'Express Booking' 
                          ? 'bg-amber-100 text-amber-900 border border-amber-200' 
                          : 'bg-blue-100 text-blue-900 border border-blue-200'
                      }`}>
                        {s.type}
                      </span>
                    </td>

                    <td className="p-3">
                      <div className="font-bold text-slate-900">{s.fullName}</div>
                      <div className="text-[11px] text-slate-500">{s.email}</div>
                      <div className="text-[11px] text-slate-500">{s.mobile}</div>
                    </td>

                    <td className="p-3">
                      <div className="font-semibold text-slate-800">{s.companyName || 'N/A'}</div>
                      <div className="text-[11px] text-sky-700">
                        {s.selectedStandards ? s.selectedStandards.slice(0, 2).join(', ') : s.consultationType}
                      </div>
                      {s.bookingDate && (
                        <div className="text-[10px] font-mono text-emerald-700">
                          {s.bookingDate} @ {s.bookingTimeSlot}
                        </div>
                      )}
                    </td>

                    <td className="p-3">
                      <select
                        value={s.status}
                        onChange={(e) => onUpdateStatus(s.id, e.target.value as LeadSubmission['status'])}
                        className="text-[11px] font-semibold p-1 rounded border border-slate-300 bg-white"
                      >
                        <option value="New">New</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Proposal Sent">Proposal Sent</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>

                    <td className="p-3 text-right">
                      <a
                        href={`mailto:${s.email}?subject=FireMonk%20Response%20${s.id}`}
                        className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-2.5 py-1 rounded text-[10px] inline-block"
                      >
                        Reply Email
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 flex justify-between items-center text-xs text-slate-500">
          <span>Official FireMonk Lead Generation Funnel Data</span>
          <button
            onClick={onClose}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-xl"
          >
            Close Portal
          </button>
        </div>

      </div>
    </div>
  );
};
