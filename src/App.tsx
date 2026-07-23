import React, { useState } from 'react';
import { LeadSubmission } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
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

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  
  // Modals state
  const [isExpressBookingOpen, setIsExpressBookingOpen] = useState(false);
  const [isLeadsPortalOpen, setIsLeadsPortalOpen] = useState(false);
  const [isSeoMetaOpen, setIsSeoMetaOpen] = useState(false);
  const [isStaffPortalOpen, setIsStaffPortalOpen] = useState(false);

  // Prefill parameters for quote engine
  const [prefillStandard, setPrefillStandard] = useState<string>('');
  const [prefillIndustry, setPrefillIndustry] = useState<string>('');

  // Local state for lead submissions (starts empty for real client inquiries)
  const [submissions, setSubmissions] = useState<LeadSubmission[]>([]);

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
            <Hero
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
              onOpenCustomQuote={() => handleOpenCustomQuoteWithStandard()}
              setCurrentView={setCurrentView}
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

        {/* VIEW 2: STANDARDS DIRECTORY */}
        {currentView === 'standards' && (
          <div className="animate-in fade-in duration-300">
            <StandardsDirectory
              onOpenCustomQuote={handleOpenCustomQuoteWithStandard}
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
            />
          </div>
        )}

        {/* VIEW 3: INDUSTRY MATRIX */}
        {currentView === 'industries' && (
          <div className="animate-in fade-in duration-300">
            <IndustryMatrix
              onOpenCustomQuote={handleOpenCustomQuoteWithIndustry}
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
            />
          </div>
        )}

        {/* VIEW 4: ROADMAP */}
        {currentView === 'roadmap' && (
          <div className="animate-in fade-in duration-300">
            <TrustRoadmap
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
              onOpenCustomQuote={() => handleOpenCustomQuoteWithStandard()}
            />
          </div>
        )}

        {/* VIEW 5: ESTIMATOR */}
        {currentView === 'estimator' && (
          <div className="animate-in fade-in duration-300">
            <QuoteCalculator
              onLoadIntoQuoteEngine={handleLoadCalculatorIntoQuote}
              onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
            />
          </div>
        )}

        {/* VIEW 6: CUSTOM QUOTE & PROPOSAL ENGINE */}
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

      {/* Global Footer */}
      <Footer
        setCurrentView={setCurrentView}
        onOpenExpressBooking={() => setIsExpressBookingOpen(true)}
        onOpenCustomQuote={() => handleOpenCustomQuoteWithStandard()}
        onOpenStaffPortal={() => setIsStaffPortalOpen(true)}
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
