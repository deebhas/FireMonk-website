import React from 'react';
import {
  FileCheck2,
  ArrowLeft,
  Mail,
  MapPin,
  Calendar
} from 'lucide-react';

interface TermsOfServiceViewProps {
  onBackToHome: () => void;
  onOpenPrivacy: () => void;
}

export const TermsOfServiceView: React.FC<TermsOfServiceViewProps> = ({
  onBackToHome,
  onOpenPrivacy
}) => {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to FireMonk LLP Home</span>
          </button>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-slate-400">Related Legal Document:</span>
            <button
              onClick={onOpenPrivacy}
              className="text-amber-400 hover:text-amber-300 underline font-medium transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Legal Header Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl mb-10">
          <div className="flex items-center gap-3 text-amber-400 mb-3">
            <FileCheck2 className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
                Statutory Legal Documentation
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                TERMS OF SERVICE
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80 mt-4">
            <div className="flex items-center gap-1.5 font-medium text-amber-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>Last Updated: October 3, 2026</span>
            </div>
            <span>•</span>
            <span className="text-slate-300 font-mono">Entity: FireMonk LLP</span>
            <span>•</span>
            <span className="text-slate-300">Website: firemonk.org</span>
          </div>

          <div className="mt-5 p-4 bg-slate-900 rounded-xl text-xs text-slate-300 border border-slate-800">
            <p className="font-semibold text-white">Binding Statutory Agreement</p>
            <p className="mt-0.5 text-slate-400 leading-relaxed">
              These terms govern all visitors and corporate advisory clients engaging with <span className="text-sky-300 font-mono">firemonk.org</span> and FireMonk LLP's consulting, auditing, and training services.
            </p>
          </div>
        </div>

        {/* Terms Body */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 lg:p-10 space-y-10 text-slate-200 text-sm leading-relaxed shadow-xl">

          <section className="space-y-3">
            <p className="text-base text-slate-200 font-medium">
              Welcome to FireMonk LLP. These Terms of Service ("Terms", "Agreement") govern your relationship with the <span className="text-sky-300 font-mono">firemonk.org</span> website and professional management systems consulting, auditing, and training services operated by FireMonk LLP ("us", "we", or "our"), a Limited Liability Partnership registered under the laws of India.
            </p>
            <p className="text-slate-300">
              Please read these Terms of Service carefully before using our website or advisory services. Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">1.</span>
              <span>Professional Advisory Engagements</span>
            </h2>
            <p className="text-slate-300">
              FireMonk LLP provides independent management systems consulting, internal audit simulations, and corporate training for ISO standards. Consulting advisory recommendations are designed to prepare client organizations for independent accredited Certification Body (CB) audits.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">2.</span>
              <span>Intellectual Property</span>
            </h2>
            <p className="text-slate-300">
              The website and its original content, assessment frameworks, proprietary gap analysis toolkits, and materials are and will remain the exclusive property of FireMonk LLP and its licensors. Our trademarks and trade dress may not be used without the prior written consent of FireMonk LLP. Client deliverables customized under formal corporate contracts are governed by specific engagement agreements.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">3.</span>
              <span>Limitation of Liability</span>
            </h2>
            <p className="text-slate-300">
              In no event shall FireMonk LLP, nor its partners, directors, employees, auditors, consultants, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of information or services provided on this website. Final certification decisions rest exclusively with the independent accredited certification body selected by the client.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">4.</span>
              <span>Disclaimer</span>
            </h2>
            <p className="text-slate-300">
              Your use of the website tools and readiness estimators is at your sole risk. Website tools are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind beyond formal written corporate engagement contracts.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">5.</span>
              <span>Governing Law & Jurisdiction</span>
            </h2>
            <p className="text-slate-300">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions, with jurisdiction in Ernakulam, Kerala.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">6.</span>
              <span>Changes</span>
            </h2>
            <p className="text-slate-300">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">7.</span>
              <span>Contact Us</span>
            </h2>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block">Email Inquiries:</span>
                  <a href="mailto:info@firemonk.org" className="text-sky-300 hover:text-sky-200 font-bold underline">
                    info@firemonk.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block font-medium">Registered Physical Office Address:</span>
                  <p className="text-slate-300 mt-0.5 leading-relaxed">
                    FireMonk LLP<br />
                    4/461, 2ND Floor, Valamkottil Towers,<br />
                    Thrikkakara, Ernakulam 682021, Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Bottom Notice */}
        <div className="mt-8 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} FireMonk LLP. All Rights Reserved.</p>
        </div>

      </div>
    </div>
  );
};
