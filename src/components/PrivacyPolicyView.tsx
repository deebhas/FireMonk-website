import React from 'react';
import {
  ShieldCheck,
  ArrowLeft,
  Mail,
  MapPin,
  Calendar
} from 'lucide-react';

interface PrivacyPolicyViewProps {
  onBackToHome: () => void;
  onOpenTerms: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({
  onBackToHome,
  onOpenTerms
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
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
                Statutory Legal Documentation
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                PRIVACY POLICY
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
        </div>

        {/* Policy Body */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 lg:p-10 space-y-10 text-slate-200 text-sm leading-relaxed shadow-xl">

          {/* Preamble */}
          <section className="space-y-3">
            <p className="text-base text-slate-200 font-medium">
              FireMonk LLP ("we," "our," or "us") operates the website <span className="text-sky-300 font-mono">firemonk.org</span>. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you engage our management systems consulting, auditing, and training services, and the choices you have associated with that data.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">1.</span>
              <span>Information Collection and Use</span>
            </h2>
            <p className="text-slate-300">
              We collect several different types of information for various purposes to provide and improve our consulting, auditing, and corporate training services to you.
            </p>
            <div className="space-y-4 pl-4 border-l-2 border-sky-500/40">
              <div>
                <strong className="text-white block mb-1">Personal Data:</strong>
                <p className="text-slate-300">
                  While using our website or submitting inquiry proposals, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: Email address, First name and last name, Phone number, Organization name, and Project Scope requirements.
                </p>
              </div>
              <div>
                <strong className="text-white block mb-1">Usage Data:</strong>
                <p className="text-slate-300">
                  We may collect information on how our website is accessed and used ("Usage Data"). This may include your device's Internet Protocol address (IP address), browser type, browser version, the pages of our site that you visit, the time and date of your visit, and standard diagnostic data.
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
              <li>To provide, administer, and maintain our consulting, auditing, and training engagements.</li>
              <li>To respond to custom proposal requests, quote calculations, and express advisory bookings.</li>
              <li>To provide corporate client support and notify you about updates to our engagements.</li>
              <li>To gather analysis or valuable information so that we can improve our service delivery.</li>
              <li>To monitor website usage and detect, prevent, and address technical issues.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">3.</span>
              <span>Transfer, Confidentiality & Disclosure of Data</span>
            </h2>
            <p className="text-slate-300">
              Client audit records, standard operating procedures, non-conformance findings, and organizational data reviewed during consulting or audit simulations are held under strict non-disclosure obligations. FireMonk LLP will take all steps reasonably necessary to ensure that your data is treated securely. We do not sell your personal or organizational data to third parties. We may disclose your personal data only if required to do so by law or in response to valid requests by public authorities.
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

          {/* Section 5 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">5.</span>
              <span>Changes to This Privacy Policy</span>
            </h2>
            <p className="text-slate-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-6 border-t border-slate-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">6.</span>
              <span>Contact Us</span>
            </h2>
            <p className="text-slate-300">
              If you have any questions about this Privacy Policy or wish to review your submitted inquiries, please contact us:
            </p>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block">Official Contact Email:</span>
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
