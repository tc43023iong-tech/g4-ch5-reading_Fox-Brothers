import React, { useState } from 'react';
import { mcqQuestions, openQuestions } from '../data/content';
import { BilingualDisplay } from './BilingualDisplay';

export const ExercisePage: React.FC = () => {
  // --- Part B State ---
  const [clozeAnswers, setClozeAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [clozeFeedback, setClozeFeedback] = useState({ q1: false, q2: false, q3: false });

  const handleClozeChange = (key: string, val: string) => {
    setClozeAnswers(prev => ({ ...prev, [key]: val }));
    // Reset feedback on type
    setClozeFeedback(prev => ({ ...prev, [key]: false }));
  };

  const checkCloze = (key: string, correct: string) => {
    if (clozeAnswers[key as keyof typeof clozeAnswers].toLowerCase().trim() === correct.toLowerCase()) {
      return 'border-green-500 bg-green-50 text-green-700';
    } else if (clozeAnswers[key as keyof typeof clozeAnswers].length > 0) {
      return 'border-red-400 bg-red-50 text-red-700';
    }
    return 'border-gray-300 focus:border-blue-400';
  };

  // --- Part C State ---
  const [mcqSelected, setMcqSelected] = useState<Record<number, string>>({});

  // --- Part D State ---
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  const toggleAnswer = (id: number) => {
    setRevealedAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-24">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
         <div>
            <h2 className="text-gray-400 font-bold uppercase tracking-widest text-base">Page 10</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-1">Exercises</h1>
         </div>
         <div className="text-gray-400 text-sm">Date: _______________</div>
      </div>

      {/* Part B: Cloze */}
      <section className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-b-8 border-blue-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-xl mr-4 shadow-md text-xl">B</span>
          <span>Read again & complete Ron's message <span className="text-lg font-normal text-gray-500 ml-2">(閱讀並完成訊息)</span></span>
        </h3>

        <div className="bg-paper p-8 rounded-2xl border-2 border-dashed border-gray-200 font-handwriting leading-loose text-2xl text-gray-700 relative">
          {/* Paper lines effect */}
          <div className="absolute inset-0 pointer-events-none opacity-5" 
               style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px)', backgroundSize: '100% 3rem', marginTop: '2.4rem' }}></div>
          
          <p className="mb-8">Hi Ted,</p>
          <p className="mb-8 leading-[3rem]">
            Do you know Alan? He’s an excellent 
            <span className="inline-flex flex-col mx-3 align-bottom">
               <span className="text-sm text-primary font-bold mb-1 text-center">①</span>
               <input 
                  type="text" 
                  value={clozeAnswers.q1}
                  onChange={(e) => handleClozeChange('q1', e.target.value)}
                  className={`w-40 border-b-2 bg-transparent text-center text-xl font-bold outline-none transition-colors ${checkCloze('q1', 'basketball')}`}
                  placeholder="sport?"
               />
            </span>
            player.
          </p>
          <p className="mb-8 leading-[3rem]">
            He has three
            <span className="inline-flex flex-col mx-3 align-bottom">
               <span className="text-sm text-primary font-bold mb-1 text-center">②</span>
               <input 
                  type="text" 
                  value={clozeAnswers.q2}
                  onChange={(e) => handleClozeChange('q2', e.target.value)}
                  className={`w-40 border-b-2 bg-transparent text-center text-xl font-bold outline-none transition-colors ${checkCloze('q2', 'brothers')}`}
                  placeholder="family?"
               />
            </span>
            . The four of them were born at the same time. Amazing!
          </p>
          <p className="mb-8 leading-[3rem]">
             I like Alan because he treats all of his teammates very
             <span className="inline-flex flex-col mx-3 align-bottom">
               <span className="text-sm text-primary font-bold mb-1 text-center">③</span>
               <input 
                  type="text" 
                  value={clozeAnswers.q3}
                  onChange={(e) => handleClozeChange('q3', e.target.value)}
                  className={`w-40 border-b-2 bg-transparent text-center text-xl font-bold outline-none transition-colors ${checkCloze('q3', 'well')}`}
                  placeholder="good/bad?"
               />
            </span>.
          </p>
          <p className="mt-10 text-right font-handwriting text-3xl">Ron</p>
        </div>
      </section>

      {/* Part C: MCQ */}
      <section className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-b-8 border-yellow-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
          <span className="bg-secondary text-white w-10 h-10 flex items-center justify-center rounded-xl mr-4 shadow-md text-xl">C</span>
          <span>Blacken the circles <span className="text-lg font-normal text-gray-500 ml-2">(塗黑圓圈 ●)</span></span>
        </h3>

        <div className="space-y-10">
          {mcqQuestions.map((q) => (
            <div key={q.id}>
              <div className="flex gap-3 mb-4">
                 <span className="font-bold text-gray-400 text-2xl">{q.id}.</span>
                 <BilingualDisplay text={q.question} className="text-2xl font-bold text-gray-800" />
              </div>
              <div className="grid gap-4 pl-8">
                {q.options.map((opt) => {
                  const isSelected = mcqSelected[q.id] === opt.id;
                  const showResult = isSelected; 
                  const isCorrectAnswer = opt.isCorrect;
                  
                  let itemClass = "border-2 border-gray-100 hover:bg-gray-50 cursor-pointer";
                  if (isSelected) {
                     itemClass = isCorrectAnswer 
                        ? "border-green-500 bg-green-50" 
                        : "border-red-400 bg-red-50";
                  }

                  return (
                    <div 
                      key={opt.id}
                      onClick={() => setMcqSelected(prev => ({...prev, [q.id]: opt.id}))}
                      className={`relative p-4 rounded-xl transition-all flex items-center gap-4 ${itemClass}`}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? (isCorrectAnswer ? 'border-green-500 bg-green-500' : 'border-red-400 bg-red-400') : 'border-gray-300'}`}>
                         {isSelected && <span className="text-white text-base">●</span>}
                      </div>
                      <div>
                        <span className="font-bold mr-3 text-gray-400 text-xl">{opt.id}.</span>
                        <BilingualDisplay text={opt.text} className="text-lg" />
                        {isSelected && !isCorrectAnswer && opt.hint && (
                           <p className="text-sm text-red-500 mt-2 font-bold">Hint: {opt.hint}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part D: Open Ended */}
      <section className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-b-8 border-green-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
          <span className="bg-green-400 text-white w-10 h-10 flex items-center justify-center rounded-xl mr-4 shadow-md text-xl">D</span>
          <span>Answer the questions <span className="text-lg font-normal text-gray-500 ml-2">(回答問題)</span></span>
        </h3>

        <div className="space-y-8">
           {openQuestions.map((q) => (
              <div key={q.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                 <div className="flex gap-3 mb-4">
                    <span className="font-bold text-green-500 text-2xl">{q.id}.</span>
                    <BilingualDisplay text={q.question} className="font-bold text-gray-800 text-xl" />
                 </div>
                 
                 <div className="pl-8 space-y-4">
                    <textarea 
                       className="w-full p-4 rounded-xl border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none text-gray-700 bg-white resize-none text-xl"
                       rows={2}
                       placeholder="Type your answer here..."
                    />
                    
                    <div className="flex items-center justify-between">
                       <button 
                          onClick={() => toggleAnswer(q.id)}
                          className="text-sm font-bold text-green-600 hover:text-green-700 flex items-center gap-1 bg-green-100 px-4 py-2 rounded-full transition-colors"
                       >
                          {revealedAnswers[q.id] ? 'Hide Answer' : 'Show Answer'}
                       </button>
                    </div>

                    {revealedAnswers[q.id] && (
                       <div className="mt-3 p-4 bg-green-100/50 rounded-xl text-green-900 text-base border border-green-200 animate-fade-in">
                          <p className="font-bold mb-2">Suggested Answer:</p>
                          <BilingualDisplay text={q.answer} className="text-xl" />
                          {q.hint && (
                             <p className="mt-3 text-sm text-green-700 italic border-t border-green-200 pt-3 font-medium">
                                Note: {q.hint.en} ({q.hint.cn})
                             </p>
                          )}
                       </div>
                    )}
                 </div>
              </div>
           ))}
        </div>
      </section>

    </div>
  );
};