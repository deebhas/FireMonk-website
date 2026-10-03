import React, { useState, useEffect } from 'react';
import { LeadSubmission } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FireSyncAppBanner } from './components/FireSyncAppBanner';
import { DigitalTransformationSection } from './components/DigitalTransformationSection';
import { TrustRoadmap } from './components/TrustRoadmap';
import { ReadinessQuiz } from './components/ReadinessQuiz';
import { QuoteCalculator } from './components/QuoteCalculator';
import { StandardsDirectory } from './components/StandardsDirectory';
import { IndustryMatrix } from './components/IndustryMatrix';
import { ExpressBookingModal } from './components/ExpressBookingModal';
import { CustomQuoteEngine } from './components/CustomQuoteEngine';
import { LeadsPortalModal } from './components/LeadsPortalModal';
import { SeoMetaModal } from './components/SeoMetaModal';
import { StaffPortalModal } from './components/StaffPortalModal';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { TermsOfServiceView } from './components/TermsOfServiceView';
import { DataDeletionModal } from './components/DataDeletionModal';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  
  // Modals state
  const [isExpressBookingOpen, setIsExpressBookingOpen] = useState(false);
  const [isLeadsPortalOpen, setIsLeadsPortalOpen] = useState(false);
  const [isSeoMetaOpen, setIsSeoMetaOpen] = useState(false);
  const [isStaffPortalOpen, setIsStaffPortalOpen] = useState(false);
  const [isDataDeletionOpen, setIsDataDeletionOpen] = useState(false);

  // Prefill parameters for quote engine
  const [prefillStandard, setPrefillStandard] = useState<string>('');
  const [prefillIndustry, setPrefillIndustry] = useState<string>('');

  // Local state for lead submissions
  const [submissions, setSubmissions] = useState<LeadSubmission[]>([]);

  // Support direct URL hash navigation for Apple/Google reviewers and deep links
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy-policy' || hash === '#privacy') {
        setCurrentView('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#terms-of-service' || hash === '#terms') {
        setCurrentView('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#firesync' || hash === '#app') {
        setCurrentView('firesync');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#digital-transformation') {
        setCurrentView('digital-transformation');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#data-deletion') {
        setIsDataDeletionOpen(true);
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  const handleAddSubmission = (submission: LeadSubmission) => {
    setSubmissions(prev => [submission, ...prev]);
  };

  const handleUpdateStatus = (id: string, status: LeadSubmission['status']) => {
    setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status } : s));
  };

  const handleClearSubmissions = () => {
    if (confirm('Are you sure you want to clear all lead registry entries?')) {
      setSubmissions([]);
    }
  };

  const handleOpenCustomQuoteWithStandard = (standardCode?: string) => {
    if (standardCode) setPrefillStandard(standardCode);
    setCurrentView('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCustomQuoteWithIndustry = (industryName?: string) => {
    if (industryName) setPrefillIndustry(industryName);
    setCurrentView('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadCalculatorIntoQuote = (standards: string[], headcount: string, scope: string) => {
    if (standards.length > 0) setPrefillStandard(standards[0]);
    setCurrentView('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-blue-950">
      
      {/* Main Sticky Header Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
        onOpenCustomQuote={() => handleOpenCustomQuoteWithStandard()}
        onOpenStaffPortal={() => setIsStaffPortalOpen(true)}
      />

      {/* Main View Router Content */}
      <main className="flex-grow">
        
        {/* VIEW 1: HOME PAGE */}
        {currentView === 'home' && (
          <div className="space-y-0 animate-in fade-in duration-300">
            {/* Hero Section with 4 Pillars & FireSync Announcement */}
            <Hero
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
              onOpenCustomQuote={() => handleOpenCustomQuoteWithStandard()}
              setCurrentView={setCurrentView}
            />

            {/* Official App Preview Coming Soon Section for Apple & Google Play verification */}
            <FireSyncAppBanner
              onOpenPrivacy={() => {
                setCurrentView('privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenDataDeletion={() => setIsDataDeletionOpen(true)}
            />

            {/* New Service Vertical: Digital Transformation Services */}
            <DigitalTransformationSection
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
              onOpenCustomQuote={() => handleOpenCustomQuoteWithStandard()}
              onViewFireSyncApp={() => {
                setCurrentView('firesync');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Strategic Trust Roadmap Section */}
            <TrustRoadmap
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
              onOpenCustomQuote={() => handleOpenCustomQuoteWithStandard()}
            />

            {/* Interactive Standards Directory Preview */}
            <StandardsDirectory
              onOpenCustomQuote={handleOpenCustomQuoteWithStandard}
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
            />

            {/* Interactive Readiness Self-Assessment Quiz */}
            <div id="readiness-quiz-section" className="py-16 bg-slate-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ReadinessQuiz
                  onOpenCustomQuote={handleOpenCustomQuoteWithStandard}
                  onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
                />
              </div>
            </div>

            {/* Industry Matrix Section */}
            <IndustryMatrix
              onOpenCustomQuote={handleOpenCustomQuoteWithIndustry}
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
            />

            {/* Cost & Timeline Estimator Section */}
            <QuoteCalculator
              onLoadIntoQuoteEngine={handleLoadCalculatorIntoQuote}
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
            />

            {/* Proposal Engine Section */}
            <CustomQuoteEngine
              onAddSubmission={handleAddSubmission}
              prefillStandard={prefillStandard}
              prefillIndustry={prefillIndustry}
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
            />
          </div>
        )}

        {/* VIEW 2: DIGITAL TRANSFORMATION SERVICES (Dedicated Vertical Page) */}
        {currentView === 'digital-transformation' && (
          <div className="animate-in fade-in duration-300">
            <DigitalTransformationSection
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
              onOpenCustomQuote={() => handleOpenCustomQuoteWithStandard()}
              onViewFireSyncApp={() => {
                setCurrentView('firesync');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <FireSyncAppBanner
              onOpenPrivacy={() => {
                setCurrentView('privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenDataDeletion={() => setIsDataDeletionOpen(true)}
            />

            {/* Custom Proposal Hook */}
            <div className="py-12 bg-slate-900 border-t border-slate-800 text-center">
              <div className="max-w-4xl mx-auto px-4 space-y-4">
                <h3 className="text-2xl font-bold text-white">Ready to Modernize Your Enterprise Management Workflows?</h3>
                <p className="text-slate-300 text-sm">
                  Connect with FireMonk LLP's digital systems engineers and IRCA lead auditors for tailored software, mobile apps, and automated compliance architecture.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => setIsExpressBookingOpen(true)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm"
                  >
                    Schedule Digital Strategy Session
                  </button>
                  <button
                    onClick={() => handleOpenCustomQuoteWithStandard()}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl text-sm border border-slate-700"
                  >
                    Request Custom Scope Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: FIRESYNC MOBILE APP (Dedicated App Store Preview Page) */}
        {currentView === 'firesync' && (
          <div className="animate-in fade-in duration-300">
            <FireSyncAppBanner
              onOpenPrivacy={() => {
                setCurrentView('privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenDataDeletion={() => setIsDataDeletionOpen(true)}
            />

            <DigitalTransformationSection
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
              onOpenCustomQuote={() => handleOpenCustomQuoteWithStandard()}
            />
          </div>
        )}

        {/* VIEW 4: PRIVACY POLICY (Verbatim Legal Page) */}
        {currentView === 'privacy' && (
          <div className="animate-in fade-in duration-300">
            <PrivacyPolicyView
              onBackToHome={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenTerms={() => {
                setCurrentView('terms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRequestDataDeletion={() => setIsDataDeletionOpen(true)}
            />
          </div>
        )}

        {/* VIEW 5: TERMS OF SERVICE (Verbatim Legal Page) */}
        {currentView === 'terms' && (
          <div className="animate-in fade-in duration-300">
            <TermsOfServiceView
              onBackToHome={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenPrivacy={() => {
                setCurrentView('privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* VIEW 6: STANDARDS DIRECTORY */}
        {currentView === 'standards' && (
          <div className="animate-in fade-in duration-300">
            <StandardsDirectory
              onOpenCustomQuote={handleOpenCustomQuoteWithStandard}
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
            />
          </div>
        )}

        {/* VIEW 7: INDUSTRY MATRIX */}
        {currentView === 'industries' && (
          <div className="animate-in fade-in duration-300">
            <IndustryMatrix
              onOpenCustomQuote={handleOpenCustomQuoteWithIndustry}
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
            />
          </div>
        )}

        {/* VIEW 8: ROADMAP */}
        {currentView === 'roadmap' && (
          <div className="animate-in fade-in duration-300">
            <TrustRoadmap
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
              onOpenCustomQuote={() => handleOpenCustomQuoteWithStandard()}
            />
          </div>
        )}

        {/* VIEW 9: ESTIMATOR */}
        {currentView === 'estimator' && (
          <div className="animate-in fade-in duration-300">
            <QuoteCalculator
              onLoadIntoQuoteEngine={handleLoadCalculatorIntoQuote}
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
            />
          </div>
        )}

        {/* VIEW 10: CUSTOM QUOTE & PROPOSAL ENGINE */}
        {currentView === 'quote' && (
          <div className="animate-in fade-in duration-300">
            <CustomQuoteEngine
              onAddSubmission={handleAddSubmission}
              prefillStandard={prefillStandard}
              prefillIndustry={prefillIndustry}
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
            />
          </div>
        )}

      </main>

      {/* Global Statutory & Compliance Footer */}
      <Footer
        setCurrentView={setCurrentView}
        onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
        onOpenCustomQuote={() => handleOpenCustomQuoteWithStandard()}
        onOpenStaffPortal={() => setIsStaffPortalOpen(true)}
        onRequestDataDeletion={() => setIsDataDeletionOpen(true)}
      />

      {/* User Data Deletion Modal (Google Play & Apple App Store verification) */}
      <DataDeletionModal
        isOpen={isDataDeletionOpen}
        onClose={() => setIsDataDeletionOpen(false)}
      />

      {/* Action Pathway A: Express Booking Modal */}
      <ExpressBookingModal
        isOpen={isExpressBookingOpen}
        onClose={() => setIsExpressBookingOpen(false)}
        onAddSubmission={handleAddSubmission}
      />

      {/* Internal Staff & Admin Gateway */}
      <StaffPortalModal
        isOpen={isStaffPortalOpen}
        onClose={() => setIsStaffPortalOpen(false)}
        onOpenLeads={() => setIsLeadsPortalOpen(true)}
        onOpenSeo={() => setIsSeoMetaOpen(true)}
        leadCount={submissions.length}
      />

      {/* Internal Lead Management Portal */}
      <LeadsPortalModal
        isOpen={isLeadsPortalOpen}
        onClose={() => setIsLeadsPortalOpen(false)}
        submissions={submissions}
        onUpdateStatus={handleUpdateStatus}
        onClearSubmissions={handleClearSubmissions}
      />

      {/* Technical SEO & Meta Kit Viewer Modal */}
      <SeoMetaModal
        isOpen={isSeoMetaOpen}
        onClose={() => setIsSeoMetaOpen(false)}
      />

    </div>
  );
}
