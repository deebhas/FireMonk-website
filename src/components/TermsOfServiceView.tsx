import React from 'react';
import { 
  FileCheck2, 
  ArrowLeft, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Building2,
  Calendar,
  Lock
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
    <div className="bg-slate-900 text-slate-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
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
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400">Statutory Legal Documentation</span>
              <h1 className="text-2xl sm:text-3xl font-black text-white">TERMS OF SERVICE</h1>
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
            <span className="text-slate-300">Jurisdiction: Republic of India</span>
          </div>

          <div className="mt-5 p-4 bg-slate-900 rounded-xl text-xs text-slate-300 border border-slate-800">
            <p className="font-semibold text-white">Binding Statutory Agreement</p>
            <p className="mt-0.5 text-slate-400 leading-relaxed">
              These terms govern all visitors, clients, and mobile application users across <span className="text-sky-300 font-mono">firemonk.org</span> and the <strong className="text-white">FireSync</strong> mobile application.
            </p>
          </div>
        </div>

        {/* Terms Body */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 lg:p-10 space-y-10 text-slate-200 text-sm leading-relaxed shadow-xl">
          
          {/* Welcome & Preamble */}
          <section className="space-y-3">
            <p className="text-base text-slate-200 font-medium">
              Welcome to FireMonk LLP. These Terms of Service ("Terms", "Agreement") govern your relationship with the firemonk.org website and the FireSync mobile application (the "Service") operated by FireMonk LLP ("us", "we", or "our"), a Limited Liability Partnership registered under the laws of India.
            </p>
            <p className="text-slate-300">
              Please read these Terms of Service carefully before using our Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">1.</span>
              <span>Accounts</span>
            </h2>
            <p className="text-slate-300">
              When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">2.</span>
              <span>Intellectual Property</span>
            </h2>
            <p className="text-slate-300">
              The Service and its original content, features, and functionality are and will remain the exclusive property of FireMonk LLP and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of FireMonk LLP.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">3.</span>
              <span>Limitation of Liability</span>
            </h2>
            <p className="text-slate-300">
              In no event shall FireMonk LLP, nor its partners, directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; or (iii) unauthorized access, use, or alteration of your transmissions or content.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">4.</span>
              <span>Disclaimer</span>
            </h2>
            <p className="text-slate-300">
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">5.</span>
              <span>Governing Law</span>
            </h2>
            <p className="text-slate-300">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">6.</span>
              <span>Changes</span>
            </h2>
            <p className="text-slate-300">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">7.</span>
              <span>Contact Us</span>
            </h2>
            <p className="text-slate-300">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">By email:</span>
                  <a href="mailto:support@firemonk.org" className="text-sm font-mono text-sky-300 hover:text-amber-400 font-bold underline">
                    support@firemonk.org
                  </a>
                </div>
              </div>

              {/* Physical Registered Office Address */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Registered Physical Office Address:</span>
                  <p className="text-xs text-slate-200 font-mono mt-0.5 leading-relaxed">
                    FireMonk LLP<br />
                    4/461, 2ND Floor, Valamkottil Towers,<br />
                    Thrikkakara, Ernakulam 682021, Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Bottom Statutory Notice */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <p>© 2026 FireMonk LLP. All Rights Reserved.</p>
          <p className="mt-1">A Limited Liability Partnership registered under the laws of India.</p>
        </div>

      </div>
    </div>
  );
};
