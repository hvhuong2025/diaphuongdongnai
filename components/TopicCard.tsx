import React from 'react';
import { Chapter } from '../types';
import { Lock, CheckCircle, Play } from 'lucide-react';

interface TopicCardProps {
  chapter: Chapter;
  status: 'locked' | 'unlocked' | 'completed';
  onClick: () => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({ chapter, status, onClick }) => {
  return (
    <div 
      onClick={status !== 'locked' ? onClick : undefined}
      className={`
        relative overflow-hidden rounded-2xl p-6 transition-all duration-300
        ${status === 'locked' ? 'bg-gray-200 cursor-not-allowed opacity-80' : 'bg-white cursor-pointer hover:-translate-y-1 hover:shadow-xl shadow-md'}
      `}
    >
      {/* Background decoration */}
      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-10 ${chapter.color}`} />
      
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${status === 'locked' ? 'bg-gray-300 text-gray-500' : `${chapter.color} text-white`}`}>
          {/* Simple icon mapping based on chapter.icon string, utilizing the shortTitle for display if no complex icon library */}
          <span className="font-bold text-lg">{chapter.id}</span>
        </div>
        
        {status === 'completed' && <CheckCircle className="w-6 h-6 text-emerald-500" />}
        {status === 'locked' && <Lock className="w-6 h-6 text-gray-400" />}
        {status === 'unlocked' && <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />}
      </div>

      <h3 className={`font-bold text-lg mb-2 ${status === 'locked' ? 'text-gray-500' : 'text-gray-800'}`}>
        {chapter.shortTitle}
      </h3>
      
      <p className="text-sm text-gray-500 line-clamp-2 mb-4">
        {chapter.title}
      </p>

      {status !== 'locked' && (
        <div className="flex items-center text-sm font-semibold text-emerald-600 group">
          Bắt đầu học <Play className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </div>
  );
};