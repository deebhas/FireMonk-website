import React from 'react';
import { 
  Cpu, 
  Smartphone, 
  Layers, 
  Workflow, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Cloud, 
  Terminal, 
  Laptop, 
  RefreshCw,
  Zap,
  Lock,
  Calendar,
  FileText
} from 'lucide-react';

interface DigitalTransformationSectionProps {
  onOpenExpressBooking: () => void;
  onOpenCustomQuote: () => void;
  onViewFireSyncApp?: () => void;
}

export const DigitalTransformationSection: React.FC<DigitalTransformationSectionProps> = ({
  onOpenExpressBooking,
  onOpenCustomQuote,
  onViewFireSyncApp
}) => {
  const capabilities = [
    {
      icon: Laptop,
      title: 'Robust Enterprise Software',
      badge: 'Core Architecture',
      description: 'Architecting resilient, scalable web and backend applications engineered specifically for regulated sectors, quality management, and enterprise operations.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ecosystems & Field Sync',
      badge: 'Mobile Division',
      description: 'Engineering native and cross-platform mobile applications like FireSync that allow management and field teams to synchronize auditing checklists, photos, and compliance logs on the go.'
    },
    {
      icon: Workflow,
      title: 'Workflow Modernization & Automation',
      badge: 'Process Engineering',
      description: 'Replacing manual paper-based logs, fragmented spreadsheets, and static documents with automated approval flows, dynamic corrective action tracking, and real-time alerts.'
    },
    {
      icon: Database,
      title: 'Digital Management Tools',
      badge: 'Cloud & Database',
      description: 'Centralized platforms for version-controlled standard operating procedures (SOPs), CAPA registries, risk registers, and management review debriefs.'
    }
  ];

  const techStackBadges = [
    'Secure Cloud Architecture',
    'Mobile-First Field Sync',
    'ISO Clause Mapping Engines',
    'Offline-First Data Storage',
    'Role-Based Access Control (RBAC)',
    'Automated Audit Trails',
    'Enterprise API Integrations',
    'Data Encryption at Rest & In Transit'
  ];

  return (
    <section id="digital-transformation-section" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden border-b border-slate-800">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-950/80 border border-sky-800/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-300">
            <Cpu className="w-4 h-4 text-sky-400" />
            <span>New Service Vertical • FireMonk Technology Group</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-sans">
            Digital Transformation Services
          </h2>

          {/* Explicit Professional Corporate Tone Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A division of <strong className="text-white font-bold">FireMonk LLP</strong> that designs, builds, and maintains robust software, digital management tools, and mobile ecosystems to help businesses modernize and automate their workflows.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/90 border border-slate-800 hover:border-sky-700/70 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs text-sky-400 font-semibold group-hover:text-amber-400 transition-colors">
                  <span>Engineered by FireMonk LLP</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Spotlight Box: Bridging ISO Compliance & Software Engineering */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-900/95 to-blue-950/70 border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-orange-950/70 text-orange-300 border border-orange-800/60 text-xs px-3 py-1 rounded-full font-bold">
                <Zap className="w-3.5 h-3.5 text-orange-400" />
                <span>Enterprise Modernization</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Where Regulatory Precision Meets Agile Digital Systems
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Traditional compliance relies on static binders and disconnected spreadsheets. FireMonk LLP's Digital Transformation division bridges the gap between ISO auditing rigor and modern cloud software. We engineer systems that embed quality, information security, and governance directly into your daily enterprise processes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom QMS & ISMS Software Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cross-Platform Mobile Apps (iOS & Android)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automated ISO Clause Mapping & Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full Maintenance, Hosting & Compliance SLA</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenExpressBooking}
                  className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consult with Our Tech Division</span>
                </button>

                {onViewFireSyncApp && (
                  <button
                    onClick={onViewFireSyncApp}
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-sky-300 font-semibold px-5 py-2.5 rounded-xl text-sm border border-slate-700 transition-all"
                  >
                    <Smartphone className="w-4 h-4 text-orange-400" />
                    <span>Explore FireSync Mobile App</span>
                  </button>
                )}
              </div>
            </div>

            {/* Architecture Architecture Column */}
            <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Terminal className="w-4 h-4 text-sky-400" />
                  <span>Digital Engineering Standards</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  Production-Ready
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs text-slate-400 font-mono bg-slate-900/90 p-3 rounded-xl border border-slate-800/80">
                  <span className="text-sky-400">entity:</span> "FireMonk LLP"<br />
                  <span className="text-sky-400">division:</span> "Digital Transformation & Software"<br />
                  <span className="text-sky-400">ecosystem:</span> "Web, Cloud & Mobile (FireSync)"<br />
                  <span className="text-sky-400">compliance_target:</span> ["ISO 9001", "ISO 27001", "ISO 42001"]
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {techStackBadges.map((badge, bIdx) => (
                    <span 
                      key={bIdx}
                      className="text-[10px] bg-slate-900 text-slate-300 border border-slate-800 px-2 py-1 rounded font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-slate-500">
                  Enterprise client software solutions maintained under strict SLA and Indian LLP statutory governance.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
