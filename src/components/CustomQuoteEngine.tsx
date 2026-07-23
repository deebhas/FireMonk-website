import React, { useState, useEffect } from 'react';
import { LeadSubmission } from '../types';
import { FireMonkLogo } from './FireMonkLogo';
import { 
  FileText, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Layers, 
  Clock, 
  Download, 
  Printer, 
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';

interface CustomQuoteEngineProps {
  onAddSubmission: (submission: LeadSubmission) => void;
  prefillStandard?: string;
  prefillIndustry?: string;
  onOpenExpressBooking: () => void;
}

export const CustomQuoteEngine: React.FC<CustomQuoteEngineProps> = ({
  onAddSubmission,
  prefillStandard,
  prefillIndustry,
  onOpenExpressBooking
}) => {
  const [step, setStep] = useState(1);

  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [employeeCount, setEmployeeCount] = useState('26 - 100 Employees');
  const [industry, setIndustry] = useState(prefillIndustry || 'High-Tech & Software');
  
  const [selectedStandards, setSelectedStandards] = useState<string[]>(
    prefillStandard ? [prefillStandard] : ['ISO 9001:2015 (QMS)', 'ISO 27001:2022 (ISMS)']
  );

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Management System Consulting',
    'Internal Auditing & Mock Review'
  ]);

  const [projectTimeline, setProjectTimeline] = useState('Standard (3 - 4 Months)');
  const [comments, setComments] = useState('');

  // Errors & Submitted
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedQuote, setSubmittedQuote] = useState<LeadSubmission | null>(null);

  useEffect(() => {
    if (prefillStandard && !selectedStandards.includes(prefillStandard)) {
      setSelectedStandards([prefillStandard]);
    }
    if (prefillIndustry) {
      setIndustry(prefillIndustry);
    }
  }, [prefillStandard, prefillIndustry]);

  const availableStandards = [
    'ISO 9001:2015 (QMS)',
    'ISO 14001:2015 (EMS)',
    'ISO 45001:2018 (OH&S)',
    'ISO 27001:2022 (ISMS)',
    'ISO 27701:2019 (PIMS Privacy)',
    'ISO 20000-1:2018 (ITSM)',
    'ISO 22301:2019 (BCMS)',
    'ISO 42001:2023 (AI Governance)',
    'ISO 31000:2018 (Risk Training)',
    'ISO 13485:2016 (Medical Devices)',
    'Computer System Validation (CSV)',
    'FDA 21 CFR Part 11',
    'AS9100 Rev D (Aerospace)',
    'IATF 16949:2016 (Automotive)',
    'ESG & BRSR Frameworks',
    'CMMI V2.0 / V3.0'
  ];

  const availableServices = [
    'Management System Consulting',
    'Internal Auditing & Mock Review',
    'Corporate Lead Auditor Training',
    'Gap Analysis & Readiness Audit'
  ];

  const toggleStandard = (st: string) => {
    if (selectedStandards.includes(st)) {
      if (selectedStandards.length > 1) {
        setSelectedStandards(selectedStandards.filter(item => item !== st));
      }
    } else {
      setSelectedStandards([...selectedStandards, st]);
    }
  };

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(item => item !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const validateStep1 = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required';
    
    if (!email.trim()) {
      errs.email = 'Official Email ID is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid corporate email ID';
    }

    if (!mobile.trim()) {
      errs.mobile = 'Mobile Number is required';
    } else if (!/^[6-9]\d{9}$/.test(mobile.replace(/\D/g, '').slice(-10))) {
      errs.mobile = 'Please enter a valid 10-digit Indian mobile number';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!validateStep1()) return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1()) {
      setStep(1);
      return;
    }

    const formattedMobile = mobile.startsWith('+91') ? mobile : `+91 ${mobile.replace(/\D/g, '')}`;

    const newQuote: LeadSubmission = {
      id: `FMQ-${Math.floor(100000 + Math.random() * 900000)}`,
      submittedAt: new Date().toLocaleString(),
      type: 'Custom Quote',
      fullName,
      email,
      mobile: formattedMobile,
      companyName: companyName || 'Not Specified',
      employeeCount,
      industry,
      selectedStandards,
      servicesNeeded: selectedServices,
      projectTimeline,
      comments,
      status: 'New'
    };

    onAddSubmission(newQuote);
    setSubmittedQuote(newQuote);
  };

  const handlePrintProposal = () => {
    window.print();
  };

  return (
    <section id="quote" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="bg-amber-100 text-amber-900 font-bold text-xs uppercase px-3 py-1 rounded-full border border-amber-200">
            Action Pathway B • Formal Proposal Hub
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
            Request Custom Corporate Proposal
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Specify your standards scope, company size, and delivery preferences. FireMonk will formulate a detailed technical proposal and commercial quotation.
          </p>
        </div>

        {!submittedQuote ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Multi-step Form Card (Col 1-7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-lg space-y-6">
              
              {/* Stepper Indicator */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                {[
                  { num: 1, label: 'Contact' },
                  { num: 2, label: 'Company' },
                  { num: 3, label: 'Standards' },
                  { num: 4, label: 'Timeline' },
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center font-mono ${
                      step === s.num
                        ? 'bg-blue-900 text-white shadow-2xs'
                        : step > s.num
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {step > s.num ? '✓' : s.num}
                    </div>
                    <span className={`text-xs font-semibold hidden sm:inline-block ${step === s.num ? 'text-blue-950 font-bold' : 'text-slate-500'}`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* STEP 1: Contact Details */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-blue-950">
                      Step 1: Contact & Communications
                    </h3>
                    <p className="text-xs text-slate-500">
                      Mandatory contact credentials for sending formal quotation documents.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {/* Full Name */}
                    <div>
                      <label className="text-xs font-bold text-slate-700">Full Name *</label>
                      <div className="relative mt-1">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="e.g. Anand V. Nair"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-900"
                        />
                      </div>
                      {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Official Email */}
                    <div>
                      <label className="text-xs font-bold text-slate-700">Official Corporate Email ID *</label>
                      <div className="relative mt-1">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          placeholder="info@firemonk.org"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-900"
                        />
                      </div>
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    {/* Mobile Number (+91 default) */}
                    <div>
                      <label className="text-xs font-bold text-slate-700">Mobile Number (Indian +91 Default) *</label>
                      <div className="relative mt-1">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          placeholder="9645414333"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-900"
                        />
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">
                        We respect your privacy. Used solely for sending formal PDF quotation links via WhatsApp / SMS.
                      </p>
                      {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Company Details */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-blue-950">
                      Step 2: Company Profile & Industry
                    </h3>
                    <p className="text-xs text-slate-500">
                      Helps customize standard applicability and auditor allocation.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700">Company / Organization Name</label>
                      <div className="relative mt-1">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="e.g. Kochi Tech Enterprise Pvt Ltd"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700">Industry Vertical</label>
                      <select
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-blue-900 bg-white"
                      >
                        <option value="High-Tech & Software">High-Tech & Software (IT/SaaS/AI)</option>
                        <option value="Life Sciences & Healthcare">Life Sciences, Pharma & Medical Devices</option>
                        <option value="Heavy Industry & Manufacturing">Heavy Industry, Aerospace & Automotive</option>
                        <option value="Corporate & Infrastructure">Corporate, Infrastructure & BFSI</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700">Estimated Headcount in Scope</label>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {['1 - 25 Employees', '26 - 100 Employees', '101 - 500 Employees', '500+ Enterprise'].map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => setEmployeeCount(c)}
                            className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all ${
                              employeeCount === c
                                ? 'bg-blue-900 text-white border-blue-900 font-bold'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Standards & Services */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-blue-950">
                      Step 3: Target ISO Standards & Services Scope
                    </h3>
                    <p className="text-xs text-slate-500">
                      Select all frameworks required for your compliance roadmap.
                    </p>
                  </div>

                  {/* Standards Multi-select */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Select Target Standards (Multi-Select)
                    </label>
                    <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-2 bg-slate-50 rounded-xl border border-slate-200">
                      {availableStandards.map((st) => {
                        const isSelected = selectedStandards.includes(st);
                        return (
                          <button
                            key={st}
                            type="button"
                            onClick={() => toggleStandard(st)}
                            className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-all ${
                              isSelected
                                ? 'bg-blue-900 text-white border-blue-900'
                                : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400'
                            }`}
                          >
                            {st} {isSelected && '✓'}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Services Multi-select */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Services Required
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableServices.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        const isConsulting = srv.includes('Consulting');
                        const isAudit = srv.includes('Audit') || srv.includes('Auditing');
                        const isTraining = srv.includes('Training');

                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all flex items-center justify-between ${
                              isSelected
                                ? isConsulting
                                  ? 'bg-sky-950 text-sky-200 border-sky-600 shadow-2xs'
                                  : isAudit
                                  ? 'bg-amber-950 text-amber-200 border-amber-600 shadow-2xs'
                                  : 'bg-emerald-950 text-emerald-200 border-emerald-600 shadow-2xs'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <span className={
                              isSelected 
                                ? (isConsulting ? 'text-sky-300' : isAudit ? 'text-amber-300' : 'text-emerald-300')
                                : (isConsulting ? 'text-sky-800' : isAudit ? 'text-amber-800' : 'text-emerald-800')
                            }>
                              {srv}
                            </span>
                            {isSelected && (
                              <span className={`font-bold text-xs px-2 py-0.5 rounded ${
                                isConsulting 
                                  ? 'bg-sky-900 text-sky-300 border border-sky-700' 
                                  : isAudit 
                                  ? 'bg-amber-900 text-amber-300 border border-amber-700' 
                                  : 'bg-emerald-900 text-emerald-300 border border-emerald-700'
                              }`}>
                                Selected ✓
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Timeline & Submission */}
              {step === 4 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-blue-950">
                      Step 4: Desired Timeline & Special Requirements
                    </h3>
                    <p className="text-xs text-slate-500">
                      Final details before generating formal quotation dossier.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700">Desired Completion Pace</label>
                      <select
                        value={projectTimeline}
                        onChange={(e) => setProjectTimeline(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-blue-900 bg-white"
                      >
                        <option value="Urgent Fast-Track (1 - 2 Months)">Urgent Fast-Track (1 - 2 Months)</option>
                        <option value="Standard (3 - 4 Months)">Standard Pace (3 - 4 Months)</option>
                        <option value="Phased Implementation (6 Months)">Phased Implementation (6 Months)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700">Specific Requirements or Comments</label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Need ISO 27001 implementation for our multi-site tech platform plus ISO 27701 GDPR privacy scope."
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Form Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 px-4 py-2.5 rounded-xl border border-slate-200"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="flex items-center gap-1.5 bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmitProposal}
                    className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 text-white font-bold px-7 py-3 rounded-xl text-sm transition-all shadow-md"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Submit Proposal Request</span>
                  </button>
                )}
              </div>

            </div>

            {/* Live Proposal Preview Card (Col 8-12) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-800 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-blue-800 pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">Proposal Blueprint Preview</h3>
                </div>
                <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                  LIVE DRAFT
                </span>
              </div>

              <div className="space-y-3 text-xs">
                
                <div className="p-3 bg-slate-900/90 rounded-xl border border-blue-800 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Contact Name</span>
                  <div className="font-bold text-white text-sm">
                    {fullName || 'Awaiting Input...'}
                  </div>
                  <p className="text-[11px] text-sky-300 font-mono">
                    {email || 'info@firemonk.org'} • {mobile || '+91 9645414333'}
                  </p>
                </div>

                <div className="p-3 bg-slate-900/90 rounded-xl border border-blue-800 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Company Scope</span>
                  <div className="font-bold text-white">
                    {companyName || 'Corporate Entity'} ({employeeCount})
                  </div>
                  <p className="text-[11px] text-slate-300">{industry}</p>
                </div>

                <div className="p-3 bg-slate-900/90 rounded-xl border border-blue-800 space-y-1.5">
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Selected Standards ({selectedStandards.length})</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedStandards.map((st, i) => (
                      <span key={i} className="text-[10px] bg-blue-950 text-sky-200 border border-blue-700 px-2 py-0.5 rounded">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-900/90 rounded-xl border border-blue-800 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Service Deliverables</span>
                  <div className="text-[11px] text-emerald-300 font-semibold">
                    {selectedServices.join(' + ')}
                  </div>
                </div>

              </div>

              <div className="p-3 bg-blue-950 rounded-xl border border-blue-800 text-[11px] text-slate-300 space-y-1">
                <div className="font-bold text-amber-400 uppercase">Proposal Assurance</div>
                <p>
                  Official technical proposal issued directly by <strong>FireMonk</strong> management systems team.
                </p>
              </div>

            </div>

          </div>
        ) : (
          /* Submitted Proposal Confirmation Dossier */
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-2xl max-w-3xl mx-auto space-y-8 animate-in zoom-in-95 print:p-0 print:shadow-none print:border-none">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <FireMonkLogo variant="horizontal" size="md" />
                <p className="text-xs text-slate-500 font-mono mt-2">
                  Official Proposal Reference: <strong className="text-blue-900">{submittedQuote.id}</strong>
                </p>
              </div>

              <div className="text-left sm:text-right text-xs text-slate-500 font-mono">
                <div>Date: {submittedQuote.submittedAt}</div>
                <div>ISO Advisory & Audit Practice</div>
              </div>
            </div>

            {/* Success Banner */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3 text-xs text-emerald-900">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <p className="font-bold">Proposal Request Formally Received!</p>
                <p className="text-[11px] text-emerald-800">
                  Thank you, {submittedQuote.fullName}. Our lead consulting team will send a detailed PDF proposal to <strong>{submittedQuote.email}</strong> within 24 hours.
                </p>
              </div>
            </div>

            {/* Proposal Summary Grid */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 text-xs">
              
              <h3 className="font-bold text-sm text-blue-950 uppercase tracking-wider border-b border-slate-200 pb-2">
                Executive Proposal Dossier Summary
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-500">Contact Person:</span>
                  <div className="font-bold text-slate-900 text-sm">{submittedQuote.fullName}</div>
                  <div className="text-slate-600">{submittedQuote.email}</div>
                  <div className="text-slate-600">{submittedQuote.mobile}</div>
                </div>

                <div>
                  <span className="text-slate-500">Organization Scope:</span>
                  <div className="font-bold text-slate-900 text-sm">{submittedQuote.companyName}</div>
                  <div className="text-slate-600">Headcount: {submittedQuote.employeeCount}</div>
                  <div className="text-slate-600">Industry: {submittedQuote.industry}</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="text-slate-500">Requested ISO Frameworks:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {submittedQuote.selectedStandards?.map((st, i) => (
                    <span key={i} className="bg-blue-900 text-white font-bold px-2.5 py-1 rounded-md text-xs">
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="text-slate-500">Service Deliverables Scope:</span>
                <div className="font-semibold text-slate-900 mt-0.5">
                  {submittedQuote.servicesNeeded?.join(', ')}
                </div>
              </div>

            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 print:hidden">
              <button
                onClick={handlePrintProposal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-3 rounded-xl text-xs border border-slate-300"
              >
                <Printer className="w-4 h-4" />
                <span>Print Proposal Summary</span>
              </button>

              <button
                onClick={onOpenExpressBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 text-white font-bold px-6 py-3 rounded-xl text-xs shadow"
              >
                <span>Schedule Follow-up Call Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
