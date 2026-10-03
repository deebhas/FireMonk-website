import React from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Mail, 
  MapPin, 
  Trash2, 
  Lock, 
  FileText, 
  CheckCircle2, 
  Building2,
  Calendar,
  ExternalLink
} from 'lucide-react';

interface PrivacyPolicyViewProps {
  onBackToHome: () => void;
  onOpenTerms: () => void;
  onRequestDataDeletion: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({
  onBackToHome,
  onOpenTerms,
  onRequestDataDeletion
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
              onClick={onOpenTerms}
              className="text-amber-400 hover:text-amber-300 underline font-medium transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

        {/* Legal Header Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl mb-10">
          <div className="flex items-center gap-3 text-sky-400 mb-3">
            <ShieldCheck className="w-8 h-8 text-sky-400 shrink-0" />
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400">Statutory Legal Documentation</span>
              <h1 className="text-2xl sm:text-3xl font-black text-white">PRIVACY POLICY</h1>
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
            <span className="text-slate-300">App: FireSync Mobile Application & firemonk.org</span>
          </div>

          {/* Quick Notice for Apple & Google Play Store Verification */}
          <div className="mt-5 p-4 bg-sky-950/60 border border-sky-800/60 rounded-xl text-xs text-sky-200 flex items-start gap-3">
            <Lock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Application Store Verification Statement</p>
              <p className="text-slate-300 mt-0.5 leading-relaxed">
                This document governs data protection for both the website <span className="text-sky-300 font-mono">firemonk.org</span> and the <strong className="text-white">FireSync</strong> mobile application distributed by FireMonk LLP on the Apple App Store and Google Play Store.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Body */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 lg:p-10 space-y-10 text-slate-200 text-sm leading-relaxed shadow-xl">
          
          {/* Preamble */}
          <section className="space-y-3">
            <p className="text-base text-slate-200 font-medium">
              FireMonk LLP ("we," "our," or "us") operates the website <span className="text-sky-300 font-mono">firemonk.org</span> and the <strong className="text-white">FireSync</strong> mobile application (the "Service"). This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">1.</span>
              <span>Information Collection and Use</span>
            </h2>
            <p className="text-slate-300">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <div className="space-y-3 pl-4 border-l-2 border-sky-800/60">
              <div>
                <strong className="text-white font-semibold block mb-1">Personal Data:</strong>
                <p className="text-slate-300">
                  While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: Email address, First name and last name, Phone number, and Usage Data.
                </p>
              </div>
              <div className="pt-2">
                <strong className="text-white font-semibold block mb-1">Usage Data:</strong>
                <p className="text-slate-300">
                  We may collect information on how the Service is accessed and used. This may include your device's Internet Protocol address (IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, and unique device identifiers.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">2.</span>
              <span>Use of Data</span>
            </h2>
            <p className="text-slate-300">
              FireMonk LLP uses the collected data for various purposes:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-slate-300">
              <li>To provide and maintain our Service.</li>
              <li>To notify you about changes to our Service.</li>
              <li>To provide customer support.</li>
              <li>To gather analysis or valuable information so that we can improve our Service.</li>
              <li>To monitor the usage of our Service and detect, prevent, and address technical issues.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">3.</span>
              <span>Transfer and Disclosure of Data</span>
            </h2>
            <p className="text-slate-300">
              Your information, including Personal Data, may be transferred to—and maintained on—computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. FireMonk LLP will take all steps reasonably necessary to ensure that your data is treated securely. We do not sell your personal data to third parties. We may disclose your personal data only if required to do so by law or in response to valid requests by public authorities.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">4.</span>
              <span>Data Security & Retention</span>
            </h2>
            <p className="text-slate-300">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. We retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
            </p>
          </section>

          {/* Section 5 - User Data Deletion Rights */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80 bg-blue-950/20 -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-2xl border border-blue-900/50">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-amber-400">5.</span>
                <span>User Data Deletion Rights</span>
              </h2>
              <span className="text-[11px] bg-amber-950/80 text-amber-300 border border-amber-800 px-2.5 py-0.5 rounded font-mono font-bold">
                Google Play & Apple Requirement
              </span>
            </div>
            
            <p className="text-slate-200 font-medium">
              In compliance with Google Play and Apple App Store requirements, users have the right to request the deletion of their accounts and associated personal data at any time. You may request data deletion by contacting us directly at our support email listed below.
            </p>

            {/* Direct Interactive Action for User Data Deletion */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onRequestDataDeletion}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-all"
              >
                <Trash2 className="w-4 h-4" />
                <span>Submit Data Deletion Request</span>
              </button>

              <a
                href="mailto:support@firemonk.org?subject=User%20Account%20and%20Personal%20Data%20Deletion%20Request"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-sky-300 px-4 py-2.5 rounded-xl text-xs border border-slate-700 font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email support@firemonk.org</span>
              </a>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">6.</span>
              <span>Changes to This Privacy Policy</span>
            </h2>
            <p className="text-slate-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">7.</span>
              <span>Contact Us</span>
            </h2>
            <p className="text-slate-300">
              If you have any questions about this Privacy Policy or wish to request data deletion, please contact us:
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
