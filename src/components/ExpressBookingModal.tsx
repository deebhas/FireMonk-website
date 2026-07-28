import React, { useState } from 'react';
import { LeadSubmission, ConsultationSlot } from '../types';
import { FireMonkLogo } from './FireMonkLogo';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  X, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  ShieldCheck,
  FileCheck,
  Globe
} from 'lucide-react';

interface ExpressBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSubmission: (submission: LeadSubmission) => void;
}

export const ExpressBookingModal: React.FC<ExpressBookingModalProps> = ({
  isOpen,
  onClose,
  onAddSubmission
}) => {
  const [selectedPillars, setSelectedPillars] = useState<string[]>(['Consulting', 'Training', 'Audit']);
  const [consultationType, setConsultationType] = useState('ISO Consulting & Implementation Strategy');
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]
  );
  const [selectedSlot, setSelectedSlot] = useState<string>('10:30 AM IST');
  
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [comments, setComments] = useState('');

  // Errors & Submitted state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedBooking, setSubmittedBooking] = useState<LeadSubmission | null>(null);

  if (!isOpen) return null;

  const togglePillar = (pillar: string) => {
    if (selectedPillars.includes(pillar)) {
      if (selectedPillars.length > 1) {
        setSelectedPillars(selectedPillars.filter(p => p !== pillar));
      }
    } else {
      setSelectedPillars([...selectedPillars, pillar]);
    }
  };

  const consultationTypes = [
    { id: 'consulting', label: 'ISO Consulting & Implementation Strategy', duration: '30 Mins', desc: 'End-to-end framework, SOP drafting & advisory' },
    { id: 'training', label: 'Corporate Lead Auditor & Staff Training', duration: '30 Mins', desc: 'In-house team upskilling & certified workshops' },
    { id: 'audit', label: 'Internal Audit & Gap Analysis Review', duration: '45 Mins', desc: 'Gap assessment & mock audit before CB evaluation' },
    { id: 'ai-governance', label: 'ISO 42001 (AI Management) Discovery', duration: '45 Mins', desc: 'AI safety & governance framework planning' },
  ];

  const timeSlots: ConsultationSlot[] = [
    { id: 't1', time: '10:30 AM IST', available: true },
    { id: 't2', time: '02:00 PM IST', available: true },
    { id: 't3', time: '04:30 PM IST', available: true },
    { id: 't4', time: '06:00 PM IST', available: true },
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    
    if (!email.trim()) {
      errs.email = 'Official email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(mobile.replace(/\D/g, '').slice(-10))) {
      errs.mobile = 'Please enter a valid 10-digit Indian mobile number';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedMobile = mobile.startsWith('+91') ? mobile : `+91 ${mobile.replace(/\D/g, '')}`;

    const newBooking: LeadSubmission = {
      id: `FMB-${Math.floor(100000 + Math.random() * 900000)}`,
      submittedAt: new Date().toLocaleString(),
      type: 'Express Booking',
      fullName,
      email,
      mobile: formattedMobile,
      companyName: companyName || 'Not Specified',
      bookingDate: selectedDate,
      bookingTimeSlot: selectedSlot,
      consultationType: `${consultationType} [Scope: ${selectedPillars.join(', ')}]`,
      comments,
      status: 'Scheduled'
    };

    onAddSubmission(newBooking);
    setSubmittedBooking(newBooking);
  };

  const handleResetModal = () => {
    setSubmittedBooking(null);
    setFullName('');
    setEmail('');
    setMobile('');
    setCompanyName('');
    setComments('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative my-8 animate-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={handleResetModal}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedBooking ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div className="space-y-3 pr-8 border-b border-slate-100 pb-4">
              <FireMonkLogo variant="horizontal" size="sm" />
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded border border-amber-200 mb-1">
                  <CalendarIcon className="w-3.5 h-3.5 text-amber-600" />
                  <span>EXPRESS ADVISORY & BOOKING</span>
                </div>
                <h3 className="text-2xl font-black text-blue-950 tracking-tight">
                  Schedule Consulting, Training & Audit Session
                </h3>
                <p className="text-xs text-slate-500">
                  Direct calendar lock with FireMonk ISO consultants, corporate trainers, and lead auditors.
                </p>
              </div>
            </div>

            {/* 1. Select Service Pillars (Checkboxes) */}
            <div className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center justify-between">
                <span>1. Service Scope Required (Select Checkboxes) *</span>
                <span className="text-[10px] text-sky-700 font-mono font-semibold">Multi-Select</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'Consulting', label: 'Consulting', desc: 'ISO Strategy & SOPs' },
                  { id: 'Training', label: 'Training', desc: 'Lead Auditor Workshops' },
                  { id: 'Audit', label: 'Audit', desc: 'Gap & Pre-Assessments' }
                ].map((pillar) => {
                  const isChecked = selectedPillars.includes(pillar.id);
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => togglePillar(pillar.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        isChecked
                          ? 'bg-blue-900 text-white border-blue-900 shadow-2xs font-semibold'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold text-xs">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="rounded text-amber-500 focus:ring-amber-400 w-3.5 h-3.5 pointer-events-none"
                        />
                        <span>{pillar.label}</span>
                      </div>
                      <p className={`text-[9px] mt-1 ${isChecked ? 'text-blue-200' : 'text-slate-500'}`}>
                        {pillar.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Select Primary Session Focus */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-950">
                2. Select Primary Session Focus
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {consultationTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setConsultationType(t.label)}
                    className={`text-left p-3 rounded-xl border text-xs transition-all ${
                      consultationType === t.label
                        ? 'bg-blue-900 text-white border-blue-900 shadow-2xs font-semibold'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold">{t.label}</span>
                      <span className="text-[10px] text-amber-400 font-mono bg-blue-950 px-1.5 py-0.5 rounded">
                        {t.duration}
                      </span>
                    </div>
                    <p className={`text-[10px] mt-1 ${consultationType === t.label ? 'text-blue-200' : 'text-slate-500'}`}>
                      {t.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Date & 4. Slot Picker */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-1">
                  <CalendarIcon className="w-3.5 h-3.5 text-sky-600" />
                  <span>3. Preferred Date</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-blue-900 bg-slate-50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>4. Time Slot (IST)</span>
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {timeSlots.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSlot(s.time)}
                      className={`py-2 px-2 text-center rounded-lg border text-xs font-mono font-semibold transition-all ${
                        selectedSlot === s.time
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-600 shadow-2xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {s.time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Prospect Contact Details */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-950">
                5. Enter Contact Details
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Full Name */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-700">Full Name *</label>
                  <div className="relative mt-1">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Nair"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  {errors.fullName && <p className="text-[10px] text-red-600 mt-0.5">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-700">Official Email ID *</label>
                  <div className="relative mt-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="info@firemonk.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>

                {/* Mobile (+91 default) */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-700">Mobile Number (+91 India) *</label>
                  <div className="relative mt-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="9645414333"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  {errors.mobile && <p className="text-[10px] text-red-600 mt-0.5">{errors.mobile}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-700">Company Name</label>
                  <div className="relative mt-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. FireMonk Tech Solutions"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>

              </div>

              {/* Specific Notes */}
              <div>
                <label className="text-[11px] font-semibold text-slate-700">Consultation Notes / Standards Interested</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Looking for ISO 27001 implementation for our SaaS platform or corporate ISO 9001 training."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full p-2.5 mt-1 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-900"
                />
              </div>

            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm Express Consultation Booking</span>
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Success Card */
          <div className="text-center space-y-5 py-4 animate-in zoom-in-95">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold bg-blue-100 text-blue-900 px-3 py-1 rounded-full border border-blue-200">
                BOOKING REFERENCE: {submittedBooking.id}
              </span>
              <h3 className="text-2xl font-black text-blue-950">
                Consultation Successfully Scheduled!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{submittedBooking.fullName}</strong>. A calendar invitation and video link have been sent to <strong>{submittedBooking.email}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto font-mono">
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">Topic:</span>
                <span className="text-blue-950 font-bold">{submittedBooking.consultationType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">Date & Time:</span>
                <span className="text-sky-700 font-bold">{submittedBooking.bookingDate} at {submittedBooking.bookingTimeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Mobile:</span>
                <span className="text-slate-900 font-bold">{submittedBooking.mobile}</span>
              </div>
            </div>

            <div className="p-3 bg-blue-50 text-blue-950 text-xs rounded-xl border border-blue-200 text-left space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-blue-900">
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                <span>FireMonk Engagement Model</span>
              </div>
              <p className="text-[11px] text-slate-600">
                On-Site Audits, Hybrid System Implementation & Virtual Lead Auditor Workshops
              </p>
            </div>

            <button
              onClick={handleResetModal}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-xl text-sm"
            >
              Done & Return
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
