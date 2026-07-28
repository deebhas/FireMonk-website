import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  ArrowRight, 
  Sparkles,
  Award,
  FileText
} from 'lucide-react';

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
    <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-blue-800 shadow-2xl relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-300 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-100 tracking-tight">
                ISO Audit Readiness Self-Assessment Quiz
              </h3>
              <p className="text-xs text-slate-300">
                Answer 4 quick questions to receive a preliminary readiness score and estimated timeline.
              </p>
            </div>
          </div>

          {!showResult && (
            <span className="text-xs font-mono font-bold bg-slate-800 text-sky-300 px-3 py-1 rounded-full border border-slate-700">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          )}
        </div>

        {/* Quiz Body */}
        {!showResult ? (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            <h4 className="text-lg font-bold text-slate-100 leading-snug">
              {questions[currentQuestion].title}
            </h4>

            <div className="grid grid-cols-1 gap-3">
              {questions[currentQuestion].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.points)}
                  className="w-full text-left p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-400/80 transition-all group flex items-center justify-between gap-4"
                >
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-sky-300">
                    {opt.label}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-slate-600 group-hover:border-sky-400 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400" />
                  </div>
                </button>
              ))}
            </div>

            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="bg-sky-500 h-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>

          </div>
        ) : (
          /* Results Panel */
          <div className="space-y-6 animate-in zoom-in-95 duration-300">
            
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-blue-700 space-y-4">
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-amber-400 font-mono font-bold uppercase tracking-wider">
                    Assessment Calculation Complete
                  </span>
                  <h4 className="text-2xl font-black text-white">
                    Estimated Audit Readiness Baseline
                  </h4>
                </div>
                
                <div className="flex items-center gap-2 bg-blue-950 px-5 py-3 rounded-2xl border border-blue-700">
                  <span className="text-3xl font-black font-mono text-amber-400">{score}%</span>
                  <span className="text-xs text-slate-300 font-medium leading-tight">
                    Readiness<br />Score
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-2 leading-relaxed pt-2 border-t border-slate-800">
                {score >= 70 ? (
                  <p className="text-emerald-300 font-medium">
                    🎉 Excellent baseline! Your organization has strong documentation potential. FireMonk can conduct a targeted internal mock audit (Step 03) to quickly clear final non-conformities before accredited CB certification.
                  </p>
                ) : (
                  <p className="text-sky-200 font-medium">
                    ⚡ Recommended Action: Your processes require structured ISO clause alignment, SOP documentation, and core employee training (Steps 01 & 02). FireMonk can construct a tailored 8-12 week consulting roadmap for your team.
                  </p>
                )}
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenCustomQuote()}
                className="w-full sm:w-auto flex-1 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Custom Proposal Based on Quiz</span>
              </button>

              <button
                onClick={onOpenExpressBooking}
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3.5 px-6 rounded-xl text-sm border border-blue-700"
              >
                Schedule Consulting, Training or Audit Review
              </button>

              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white underline py-2 flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
