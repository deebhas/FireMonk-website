import React, { useState } from 'react';
import { FireMonkLogo } from './FireMonkLogo';
import { 
  Code, 
  Share2, 
  Copy, 
  Check, 
  Globe, 
  FileCode, 
  X, 
  Sparkles,
  BarChart2
} from 'lucide-react';

interface SeoMetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoMetaModal: React.FC<SeoMetaModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'jsonld' | 'og' | 'analytics'>('jsonld');

  if (!isOpen) return null;

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://firemonk.org/#organization",
        "name": "FireMonk",
        "legalName": "FireMonk",
        "url": "https://firemonk.org",
        "logo": "https://firemonk.org/assets/firemonk-logo.png",
        "description": "Management system consulting, auditing, and training firm across ISO standards.",
        "email": "info@firemonk.org",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-96454-14333",
          "email": "info@firemonk.org",
          "contactType": "customer service",
          "areaServed": ["IN", "Global"],
          "availableLanguage": ["English", "Hindi"]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://firemonk.org/#service",
        "name": "FireMonk Management Systems Consulting",
        "image": "https://firemonk.org/assets/firemonk-og-preview.png",
        "telephone": "+91-96454-14333",
        "email": "info@firemonk.org",
        "priceRange": "$$"
      }
    ]
  };

  const openGraphMarkup = `<!-- Open Graph Protocol Meta Tags for Social & LinkedIn Sharing -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="FireMonk" />
<meta property="og:title" content="FireMonk | Management Systems Consulting, Training & Auditing" />
<meta property="og:description" content="End-to-end ISO 9001, ISO 27001, ISO 42001 (AI), ISO 13485, and IATF 16949 management systems consulting, internal auditing, and corporate training." />
<meta property="og:url" content="https://firemonk.org" />
<meta property="og:image" content="https://firemonk.org/og-preview.png" />
<meta property="og:locale" content="en_US" />

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="FireMonk - ISO Standards Advisory" />
<meta name="twitter:description" content="Management system consulting, auditing, and corporate lead auditor training firm for enterprise ISO compliance." />
<meta name="twitter:image" content="https://firemonk.org/og-preview.png" />`;

  const analyticsContainers = `<!-- Google Analytics GA4 Script Placeholder -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FIREMONKLLP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-FIREMONKLLP');
</script>

<!-- LinkedIn Insight Tag Container -->
<script type="text/javascript">
  _linkedin_partner_id = "FIREMONK_LINKEDIN_PARTNER_ID";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>`;

  const copyToClipboard = (text: string, tabKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tabKey);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 text-white rounded-3xl max-w-3xl w-full border border-blue-800 shadow-2xl p-6 sm:p-8 relative my-8 animate-in zoom-in-95">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-blue-800 pb-4 pr-10">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-sky-400" />
            <h3 className="text-xl font-black text-white">Built-in Technical SEO & Meta Kit</h3>
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 pt-4 pb-2 border-b border-slate-800">
          <button
            onClick={() => setActiveTab('jsonld')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'jsonld' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            JSON-LD Schema
          </button>
          <button
            onClick={() => setActiveTab('og')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'og' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Open Graph Simulator
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'analytics' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Analytics Container
          </button>
        </div>

        {/* Tab Body */}
        <div className="py-4 space-y-4">
          
          {activeTab === 'jsonld' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-mono text-[11px]">Hardcoded Organization & LocalBusiness Schema</span>
                <button
                  onClick={() => copyToClipboard(JSON.stringify(jsonLdSchema, null, 2), 'jsonld')}
                  className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-bold"
                >
                  {copiedTab === 'jsonld' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedTab === 'jsonld' ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-[11px] text-sky-300 max-h-72 overflow-y-auto">
                {JSON.stringify(jsonLdSchema, null, 2)}
              </pre>
            </div>
          )}

          {activeTab === 'og' && (
            <div className="space-y-4">
              
              {/* Preview Card */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-400">LinkedIn / Social Sharing Card Simulation</span>
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 p-4 space-y-2">
                  <div className="w-full h-24 bg-gradient-to-r from-blue-950 to-slate-900 rounded-lg flex items-center justify-center border border-blue-800 p-2">
                    <FireMonkLogo variant="horizontal" size="md" lightText={true} />
                  </div>
                  <div className="text-xs font-mono text-slate-400">firemonk.org</div>
                  <div className="text-sm font-bold text-white">
                    FireMonk | Management Systems Consulting, Training & Auditing
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    End-to-end ISO 9001, ISO 27001, ISO 42001 (AI), ISO 13485, and IATF 16949 consulting, internal auditing, and corporate training.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-mono text-[11px]">Open Graph HTML Meta Tags</span>
                <button
                  onClick={() => copyToClipboard(openGraphMarkup, 'og')}
                  className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-bold"
                >
                  {copiedTab === 'og' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedTab === 'og' ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-[11px] text-amber-300 max-h-40 overflow-y-auto">
                {openGraphMarkup}
              </pre>

            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-mono text-[11px]">Non-blocking Analytics Script Container</span>
                <button
                  onClick={() => copyToClipboard(analyticsContainers, 'analytics')}
                  className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-bold"
                >
                  {copiedTab === 'analytics' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedTab === 'analytics' ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-[11px] text-emerald-300 max-h-60 overflow-y-auto">
                {analyticsContainers}
              </pre>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>Ready for Cloudflare Pages serverless deployment</span>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-xl"
          >
            Close SEO Kit
          </button>
        </div>

      </div>
    </div>
  );
};
