import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  RotateCcw,
  ArrowRight,
  FileText,
  Compass
} from 'lucide-react';
import heroEnterpriseHub from '../assets/images/hero_enterprise_hub_1795006383269.jpg';

interface ReadinessQuizProps {
  onOpenCustomQuote: (prefillStandard?: string) => void;
  onOpenExpressBooking: () => void;
}

export const ReadinessQuiz: React.FC<ReadinessQuizProps> = ({
  onOpenCustomQuote,
  onOpenExpressBooking
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      title: 'What is your primary strategic objective?',
      options: [
        { label: 'Pass a critical client vendor security/quality assessment', points: 25, recommended: 'ISO 27001 / ISO 9001' },
        { label: 'Expand into international markets or EU/US export', points: 25, recommended: 'ISO 9001 / ISO 13485 / AS9100' },
        { label: 'Deploy AI models & need ethical governance framework', points: 30, recommended: 'ISO 42001 (AIMS)' },
        { label: 'Standardize internal processes & cut operational waste', points: 20, recommended: 'ISO 9001 / CMMI' },
      ]
    },
    {
      id: 2,
      title: 'What is the current status of your SOPs and documentation?',
      options: [
        { label: 'No formal SOPs or policies documented yet', points: 10, detail: 'High consulting gap' },
        { label: 'Inconsistent SOPs exist in some departments', points: 18, detail: 'Moderate gap' },
        { label: 'Well-documented processes but not aligned with ISO clauses', points: 25, detail: 'Minor alignment needed' },
        { label: 'Mature documented system, need internal mock audit review', points: 30, detail: 'Ready for mock audit' },
      ]
    },
    {
      id: 3,
      title: 'How many employees work in your scope of operations?',
      options: [
        { label: '1 - 25 Employees (Agile SME)', points: 25, timeline: '6 - 8 Weeks' },
        { label: '26 - 100 Employees (Growing Mid-Market)', points: 20, timeline: '8 - 12 Weeks' },
        { label: '101 - 500 Employees (Large Enterprise)', points: 15, timeline: '12 - 16 Weeks' },
        { label: '500+ Employees (Global Multi-site)', points: 10, timeline: '16 - 24 Weeks' },
      ]
    },
    {
      id: 4,
      title: 'How soon do you need to achieve final audit readiness?',
      options: [
        { label: 'Urgent: Within 30 to 60 Days (Fast-Track)', points: 15, pace: 'Accelerated' },
        { label: 'Standard: Within 3 to 4 Months', points: 25, pace: 'Optimal' },
        { label: 'Strategic: Within 6 Months', points: 25, pace: 'Comprehensive' },
        { label: 'Exploratory: Planning for next financial year', points: 20, pace: 'Phased' },
      ]
    }
  ];

  const handleSelectOption = (points: number) => {
    const nextAnswers = [...answers, points];
    setAnswers(nextAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const calculateScore = () => {
    const total = answers.reduce((acc, curr) => acc + curr, 0);
    return Math.min(Math.round((total / 110) * 100), 98);
  };

  const score = showResult ? calculateScore() : 0;

  return (
    <div className="relative bg-[#0a132c] text-white rounded-3xl p-6 sm:p-10 border border-blue-800/80 shadow-2xl overflow-hidden">
      {/* Moving Subtle Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={heroEnterpriseHub}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover animate-ken-burns opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#08122b]/95 via-[#0b193d]/88 to-[#070f24]/95" />
      </div>

      {/* Warm Amber Atmospheric Accent */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#ff5500]/15 rounded-full blur-3xl animate-ambient pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-blue-800/70 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#ff5500] to-amber-500 text-white flex items-center justify-center shadow-md shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white tracking-tight">
                ISO Audit Readiness Self-Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Answer 4 quick questions to estimate your organization's readiness baseline.
              </p>
            </div>
          </div>

          {!showResult && (
            <span className="text-xs font-bold text-sky-300 tabular-nums whitespace-nowrap shrink-0">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          )}
        </div>

        {/* Quiz Body */}
        {!showResult ? (
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {questions[currentQuestion].title}
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {questions[currentQuestion].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.points)}
                      className="w-full text-left p-4 rounded-2xl bg-slate-900/75 hover:bg-blue-900/70 border border-blue-800/70 hover:border-amber-400/80 transition-all duration-150 group flex items-center justify-between gap-4"
                    >
                      <span className="text-sm font-semibold text-slate-100 group-hover:text-white">
                        {opt.label}
                      </span>
                      <div className="w-7 h-7 rounded-full border border-blue-700 group-hover:border-amber-400 group-hover:bg-amber-400/15 flex items-center justify-center shrink-0 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-300 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <motion.div
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-gradient-to-r from-[#0060df] via-sky-400 to-[#ff5500] h-full"
              />
            </div>
          </div>
        ) : (
          /* Results Panel */
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-slate-950/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/80 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                    Assessment Calculation Complete
                  </span>
                  <h4 className="text-2xl font-black text-white mt-0.5">
                    Estimated Audit Readiness Baseline
                  </h4>
                </div>

                <div className="flex items-center gap-3 bg-blue-950/90 px-5 py-3 rounded-2xl border border-blue-700">
                  <span className="text-3xl font-black text-amber-400 tabular-nums">{score}%</span>
                  <span className="text-xs text-slate-300 font-medium leading-tight">
                    Readiness<br />Score
                  </span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed pt-3 border-t border-slate-800">
                {score >= 70 ? (
                  <p className="text-emerald-300 font-medium">
                    Strong baseline: Your organization demonstrates solid documentation maturity. FireMonk can conduct a targeted internal mock audit (Step 03) to close remaining non-conformities before external certification.
                  </p>
                ) : (
                  <p className="text-sky-200 font-medium">
                    Recommended path: Your processes will benefit from structured ISO clause alignment, SOP documentation, and team training (Steps 01 and 02). FireMonk can build an 8-12 week consulting roadmap tailored to your operations.
                  </p>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenCustomQuote()}
                className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#ff5500] to-amber-500 hover:from-[#e64d00] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4" />
                <span>Request Custom Proposal</span>
              </button>

              <button
                onClick={onOpenExpressBooking}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-semibold py-3.5 px-6 rounded-xl text-sm border border-white/20 transition-colors whitespace-nowrap shrink-0"
              >
                Schedule Advisory Review
              </button>

              <button
                onClick={handleReset}
                className="text-xs text-slate-300 hover:text-white py-2 px-2 flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake</span>
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};
