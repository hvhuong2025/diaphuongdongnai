import React, { useState, useEffect } from 'react';
import { AppView, Chapter, UserProgress } from './types';
import { CHAPTERS } from './data/content';
import { TopicCard } from './components/TopicCard';
import { LearningView } from './components/LearningView';
import { QuizGame } from './components/QuizGame';
import { Button } from './components/Button';
import { Map, Award, Book, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.DASHBOARD);
  const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
  
  // Persist progress in local state (in a real app, use localStorage or DB)
  const [progress, setProgress] = useState<UserProgress>({
    unlockedChapters: [1], // Chapter 1 unlocked by default
    completedChapters: [],
    score: 0,
    badges: []
  });

  const activeChapter = CHAPTERS.find(c => c.id === activeChapterId);

  // Calculate stats
  const totalChapters = CHAPTERS.length;
  const completedCount = progress.completedChapters.length;
  const progressPercentage = Math.round((completedCount / totalChapters) * 100);

  const handleChapterClick = (id: number) => {
    setActiveChapterId(id);
    setView(AppView.LEARN);
  };

  const handleLearnComplete = () => {
    setView(AppView.QUIZ);
  };

  const handleQuizComplete = (gameScore: number, passed: boolean) => {
    if (passed && activeChapter) {
      // Update progress
      setProgress(prev => {
        const newCompleted = prev.completedChapters.includes(activeChapter.id) 
          ? prev.completedChapters 
          : [...prev.completedChapters, activeChapter.id];
        
        const nextChapterId = activeChapter.id + 1;
        const newUnlocked = prev.unlockedChapters.includes(nextChapterId)
          ? prev.unlockedChapters
          : (nextChapterId <= totalChapters ? [...prev.unlockedChapters, nextChapterId] : prev.unlockedChapters);

        const newBadges = prev.badges.includes(activeChapter.badgeName)
          ? prev.badges
          : [...prev.badges, activeChapter.badgeName];

        return {
          score: prev.score + gameScore,
          completedChapters: newCompleted,
          unlockedChapters: newUnlocked,
          badges: newBadges
        };
      });
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setView(AppView.VICTORY);
    } else {
      // Failed, maybe show a "Try Again" modal, but for now go back to dashboard
      alert("Bạn đã hết lượt chơi! Hãy ôn tập lại nhé.");
      setView(AppView.DASHBOARD);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-800 font-sans selection:bg-emerald-200">
      
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setView(AppView.DASHBOARD)}>
            <div className="bg-emerald-600 text-white p-2 rounded-lg">
              <Map size={20} />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-gray-800 hidden sm:block">
              Bình Phước Explorer
            </span>
          </div>

          <div className="flex items-center space-x-4">
             <div className="hidden sm:flex items-center text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
               <Star className="w-4 h-4 text-amber-500 mr-2 fill-current" />
               <span>{progress.score} XP</span>
             </div>
             <div className="flex items-center text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
               <Award className="w-4 h-4 text-indigo-500 mr-2" />
               <span>{progress.badges.length}/{totalChapters}</span>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        
        {view === AppView.DASHBOARD && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="bg-emerald-700 rounded-3xl p-8 mb-10 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
               <div className="relative z-10">
                 <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Khám phá Di sản Bình Phước</h1>
                 <p className="text-emerald-100 text-lg mb-6 max-w-2xl">
                   Hành trình tìm hiểu lịch sử, văn hóa và thiên nhiên của vùng đất đỏ miền Đông. Hoàn thành các bài học để thu thập huy hiệu!
                 </p>
                 
                 <div className="flex items-center space-x-4">
                    <div className="flex-1 max-w-xs bg-emerald-900/50 rounded-full h-3">
                      <div className="bg-amber-400 h-3 rounded-full" style={{width: `${progressPercentage}%`}}></div>
                    </div>
                    <span className="font-bold text-sm">{progressPercentage}% Hoàn thành</span>
                 </div>
               </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CHAPTERS.map((chapter) => {
                const isUnlocked = progress.unlockedChapters.includes(chapter.id);
                const isCompleted = progress.completedChapters.includes(chapter.id);
                
                return (
                  <TopicCard 
                    key={chapter.id}
                    chapter={chapter}
                    status={isCompleted ? 'completed' : isUnlocked ? 'unlocked' : 'locked'}
                    onClick={() => handleChapterClick(chapter.id)}
                  />
                );
              })}
            </div>
          </div>
        )}

        {view === AppView.LEARN && activeChapter && (
          <LearningView 
            chapter={activeChapter}
            onBack={() => setView(AppView.DASHBOARD)}
            onComplete={handleLearnComplete}
          />
        )}

        {view === AppView.QUIZ && activeChapter && (
          <QuizGame 
            chapter={activeChapter}
            onComplete={handleQuizComplete}
            onExit={() => setView(AppView.DASHBOARD)}
          />
        )}

        {view === AppView.VICTORY && activeChapter && (
          <div className="max-w-md mx-auto text-center animate-bounce-in py-12">
            <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="w-20 h-20 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-black text-gray-800 mb-2">Chúc mừng!</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Bạn đã hoàn thành chủ đề <br/>
              <span className="font-bold text-emerald-600">{activeChapter.title}</span>
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8 transform rotate-1">
              <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-2">Huy hiệu mới</p>
              <div className="text-2xl font-black text-indigo-600">{activeChapter.badgeName}</div>
            </div>

            <Button size="lg" onClick={() => setView(AppView.DASHBOARD)}>
              Tiếp tục hành trình
            </Button>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-12 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2024 Giáo dục địa phương tỉnh Bình Phước - Lớp 8</p>
          <p className="mt-2">Ứng dụng hỗ trợ học tập tương tác</p>
        </div>
      </footer>

      {/* Tailwind Animations & Utilities that might not be in default CDN */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-bounce-in {
          animation: fadeIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;