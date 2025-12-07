import React, { useState } from 'react';
import { ReadingPage } from './components/ReadingPage';
import { ExercisePage } from './components/ExercisePage';

enum Page {
  READING = 'reading',
  EXERCISES = 'exercises'
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.READING);

  return (
    <div className="min-h-screen font-sans text-gray-800 pb-12">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg transform -rotate-3">
              F
            </div>
            <div>
              <h1 className="font-bold text-gray-800 text-xl leading-tight">Fox Brothers</h1>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Interactive Unit</p>
            </div>
          </div>

          <div className="flex bg-gray-100 p-1.5 rounded-xl">
            <button
              onClick={() => setCurrentPage(Page.READING)}
              className={`px-6 py-2.5 rounded-lg text-base font-bold transition-all ${
                currentPage === Page.READING
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Page 9
            </button>
            <button
              onClick={() => setCurrentPage(Page.EXERCISES)}
              className={`px-6 py-2.5 rounded-lg text-base font-bold transition-all ${
                currentPage === Page.EXERCISES
                  ? 'bg-white text-secondary shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Page 10
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {currentPage === Page.READING ? (
           <div className="animate-fade-in">
              <ReadingPage />
              <div className="max-w-4xl mx-auto mt-12 text-center">
                 <button 
                    onClick={() => {
                       window.scrollTo({ top: 0, behavior: 'smooth' });
                       setCurrentPage(Page.EXERCISES);
                    }}
                    className="bg-secondary hover:bg-yellow-500 text-white font-bold py-4 px-10 text-lg rounded-full shadow-lg shadow-yellow-200 transform transition hover:-translate-y-1"
                 >
                    Go to Exercises (Page 10) →
                 </button>
              </div>
           </div>
        ) : (
           <div className="animate-fade-in">
              <ExercisePage />
              <div className="max-w-4xl mx-auto mt-12 text-center">
                 <button 
                    onClick={() => {
                       window.scrollTo({ top: 0, behavior: 'smooth' });
                       setCurrentPage(Page.READING);
                    }}
                    className="text-gray-400 hover:text-primary font-bold py-4 px-10 text-base"
                 >
                    ← Back to Reading (Page 9)
                 </button>
              </div>
           </div>
        )}
      </main>

      {/* Decorative background elements */}
      <div className="fixed top-20 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob pointer-events-none"></div>
      <div className="fixed top-40 right-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
    </div>
  );
}

export default App;