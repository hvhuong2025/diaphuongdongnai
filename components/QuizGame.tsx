import React, { useState, useEffect } from 'react';
import { Chapter, Question } from '../types';
import { Button } from './Button';
import { Heart, Trophy, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizGameProps {
  chapter: Chapter;
  onComplete: (score: number, passed: boolean) => void;
  onExit: () => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({ chapter, onComplete, onExit }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const currentQuestion: Question = chapter.questions[currentQIndex];

  const handleSelect = (index: number) => {
    if (!isChecked) {
      setSelectedOption(index);
    }
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    
    setIsChecked(true);
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(s => s + 100 + (streak * 10)); // Bonus points for streak
      setStreak(s => s + 1);
      if (streak > 0) confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } else {
      setHearts(h => h - 1);
      setStreak(0);
    }
  };

  const handleNext = () => {
    // Check game over conditions
    if (hearts === 0) {
      onComplete(score, false);
      return;
    }

    if (currentQIndex < chapter.questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsChecked(false);
    } else {
      // Finished all questions
      onComplete(score, true);
    }
  };

  // Effect to trigger failure immediately if hearts reach 0 during check
  useEffect(() => {
    if (hearts === 0 && isChecked) {
       // Allow user to see the explanation briefly or handle via a "Game Over" modal state?
       // For simplicity, we wait for "Continue" button which will trigger onComplete(..., false)
    }
  }, [hearts, isChecked]);

  return (
    <div className="max-w-2xl mx-auto w-full">
      {/* Game HUD */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm mb-6">
        <button onClick={onExit} className="text-gray-400 hover:text-red-500 font-bold text-sm">✕ Thoát</button>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-rose-500">
            <Heart className="w-6 h-6 fill-current animate-pulse" />
            <span className="ml-2 font-black text-xl">{hearts}</span>
          </div>
          <div className="flex items-center text-amber-500">
            <Trophy className="w-6 h-6" />
            <span className="ml-2 font-black text-xl">{score}</span>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Progress Bar */}
        <div className="h-2 bg-gray-100 w-full">
          <div 
            className="h-full bg-indigo-500 transition-all duration-500"
            style={{ width: `${((currentQIndex + 1) / chapter.questions.length) * 100}%` }}
          />
        </div>

        <div className="p-8">
          <h2 className="text-gray-500 font-bold text-sm uppercase tracking-wide mb-2">
            Câu hỏi {currentQIndex + 1} / {chapter.questions.length}
          </h2>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 leading-snug">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((opt, idx) => {
              let stateStyles = "border-2 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50";
              const isSelected = selectedOption === idx;
              
              if (isChecked) {
                if (idx === currentQuestion.correctAnswer) {
                  stateStyles = "bg-green-100 border-green-500 text-green-800";
                } else if (isSelected && idx !== currentQuestion.correctAnswer) {
                  stateStyles = "bg-red-100 border-red-500 text-red-800 opacity-60";
                } else {
                  stateStyles = "opacity-50 border-gray-100";
                }
              } else if (isSelected) {
                stateStyles = "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200 ring-offset-2";
              }

              return (
                <button
                  key={idx}
                  disabled={isChecked}
                  onClick={() => handleSelect(idx)}
                  className={`w-full p-4 rounded-xl text-left font-semibold text-lg transition-all duration-200 ${stateStyles}`}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full border-2 mr-4 flex items-center justify-center font-bold text-sm
                      ${isChecked && idx === currentQuestion.correctAnswer ? 'bg-green-500 border-green-500 text-white' : 
                        isChecked && isSelected ? 'bg-red-500 border-red-500 text-white' : 
                        isSelected ? 'bg-indigo-500 border-indigo-500 text-white' : 'border-gray-300 text-gray-400'}
                    `}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    {opt}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer / Feedback Area */}
        <div className="bg-gray-50 p-6 border-t border-gray-100">
          {!isChecked ? (
            <Button 
              fullWidth 
              size="lg" 
              onClick={handleCheck} 
              disabled={selectedOption === null}
              className={selectedOption === null ? "opacity-50 cursor-not-allowed" : ""}
            >
              Kiểm tra
            </Button>
          ) : (
            <div className="animate-fade-in-up">
              <div className={`flex items-start mb-4 ${selectedOption === currentQuestion.correctAnswer ? 'text-green-700' : 'text-red-700'}`}>
                {selectedOption === currentQuestion.correctAnswer ? (
                   <CheckCircle2 className="w-8 h-8 mr-3 flex-shrink-0" />
                ) : (
                   <XCircle className="w-8 h-8 mr-3 flex-shrink-0" />
                )}
                <div>
                  <h4 className="font-bold text-lg">
                    {selectedOption === currentQuestion.correctAnswer ? 'Chính xác!' : 'Chưa đúng rồi!'}
                  </h4>
                  <p className="text-gray-600 mt-1 text-sm">{currentQuestion.explanation}</p>
                </div>
              </div>
              <Button 
                fullWidth 
                size="lg" 
                variant={hearts === 0 ? "danger" : "primary"}
                onClick={handleNext}
              >
                {hearts === 0 ? "Kết thúc" : (currentQIndex === chapter.questions.length - 1 ? "Hoàn thành" : "Tiếp tục")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};