import React, { useState } from 'react';
import { Chapter } from '../types';
import { Button } from './Button';
import { ChevronRight, ChevronLeft, BookOpen } from 'lucide-react';

interface LearningViewProps {
  chapter: Chapter;
  onComplete: () => void;
  onBack: () => void;
}

export const LearningView: React.FC<LearningViewProps> = ({ chapter, onComplete, onBack }) => {
  const [step, setStep] = useState(0);
  const totalSteps = chapter.details.length + 1; // +1 for the summary slide

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <div className="max-w-3xl mx-auto w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-gray-500 hover:text-gray-700 font-semibold text-sm">
          &larr; Quay lại
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-emerald-600">Bài học {chapter.id}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div 
          className="bg-emerald-500 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content Card */}
      <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 mb-8 relative overflow-hidden flex flex-col">
        {/* Decorative Top Bar */}
        <div className={`absolute top-0 left-0 right-0 h-3 ${chapter.color}`} />

        <div className="flex-1 overflow-y-auto">
          {step === 0 ? (
            // Summary Slide
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-full ${chapter.color} bg-opacity-10 text-emerald-700`}>
                  <BookOpen size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Tổng quan</h2>
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                {chapter.title}
              </h1>
              <ul className="space-y-4">
                {chapter.summary.map((item, idx) => (
                  <li key={idx} className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm mr-3 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 relative h-48 rounded-xl overflow-hidden bg-gray-100">
                 {/* Placeholder for educational image */}
                 <img 
                   src={`https://picsum.photos/seed/${chapter.id}/800/400`} 
                   alt="Chapter illustration" 
                   className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <span className="text-white text-sm font-medium opacity-90">Hình ảnh minh họa giáo dục địa phương</span>
                 </div>
              </div>
            </div>
          ) : (
            // Detail Slide
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                 <span className="text-emerald-600 font-bold text-xl opacity-50">#{step}</span>
                 <h2 className="text-2xl font-bold text-gray-800">{chapter.details[step - 1].heading}</h2>
              </div>
              
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                {chapter.details[step-1].content}
              </div>

               <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-100 border-l-4 border-l-amber-400">
                  <p className="text-amber-800 italic font-medium">
                    "Ghi nhớ: Kiến thức này sẽ xuất hiện trong phần thử thách!"
                  </p>
               </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-100">
          <Button 
            variant="secondary" 
            onClick={handlePrev} 
            disabled={step === 0}
            className={step === 0 ? 'invisible' : ''}
          >
            <ChevronLeft className="w-5 h-5 mr-1" /> Trước
          </Button>

          <Button 
            variant="primary" 
            onClick={handleNext}
          >
            {step === totalSteps - 1 ? (
              <span>Thử thách <span className="ml-1">⚔️</span></span>
            ) : (
              <span className="flex items-center">Tiếp theo <ChevronRight className="w-5 h-5 ml-1" /></span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};