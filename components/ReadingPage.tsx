import React from 'react';
import { articleSections } from '../data/content';
import { BilingualDisplay } from './BilingualDisplay';

export const ReadingPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-paper p-8 md:p-12 rounded-3xl shadow-xl border-4 border-white">
      {/* Instruction Banner */}
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 mb-8 text-center">
         <p className="text-2xl font-bold text-yellow-600">
            Open your book to page 9 and 10
         </p>
         <p className="text-gray-500 text-base mt-1 font-medium">
            (請翻開書本第 9 和 10 頁)
         </p>
      </div>

      {/* Header */}
      <div className="border-b-2 border-dashed border-gray-300 pb-6 mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-gray-400 font-bold uppercase tracking-widest text-base">Page 9</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mt-2 leading-tight">
            Update on the Fox brothers
          </h1>
          <p className="text-gray-400 text-lg mt-2 font-medium">(Fox 兄弟的最新消息)</p>
        </div>
        <div className="text-right hidden sm:block">
          <div className="bg-yellow-100 px-4 py-2 rounded-full text-yellow-700 text-sm font-bold mb-2">
            Text A
          </div>
          <div className="text-gray-400 text-sm">Date: _______________</div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        {articleSections.map((section, idx) => (
          <section key={idx} className="relative">
            {/* Section Title */}
            <div className="flex items-center gap-3 mb-5 pl-2">
               <div className="w-1.5 h-8 bg-secondary rounded-full"></div>
               <h3 className="text-2xl font-bold text-secondary flex items-center gap-3">
                  {section.title.en}
                  <span className="text-base font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {section.title.cn}
                  </span>
               </h3>
            </div>

            {/* Sentences List */}
            <div className="space-y-4">
              {section.content.map((sentence, sIdx) => (
                <div 
                  key={sIdx} 
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                >
                  <BilingualDisplay text={sentence} block />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer / Captions */}
      <div className="mt-12 bg-blue-50 p-6 rounded-2xl border border-blue-100">
        <div className="flex flex-col sm:flex-row gap-8 text-base text-gray-700 italic">
          <div className="flex-1">
            <span className="font-bold text-blue-500 not-italic mr-2 text-lg">[Caption 1]</span>
            <span className="text-lg">Nine years ago, the four boys liked playing together.</span>
            <span className="block text-sm text-gray-500 mt-1 font-medium not-italic">(九年前，四個男孩喜歡一起玩。)</span>
          </div>
          <div className="flex-1">
            <span className="font-bold text-blue-500 not-italic mr-2 text-lg">[Caption 2]</span>
            <span className="text-lg">Now they are all good friends.</span>
            <span className="block text-sm text-gray-500 mt-1 font-medium not-italic">(現在他們都是好朋友。)</span>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center text-base font-mono text-gray-500 border-t pt-6">
        <div>Prepared by: <strong className="text-gray-800 text-lg">Dr Wong</strong></div>
        <div>Date: <strong className="text-gray-800 text-lg">20th December 20XX</strong></div>
      </div>
    </div>
  );
};