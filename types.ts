export enum AppView {
  DASHBOARD = 'DASHBOARD',
  LEARN = 'LEARN',
  QUIZ = 'QUIZ',
  VICTORY = 'VICTORY'
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

export interface Chapter {
  id: number;
  title: string;
  shortTitle: string;
  icon: string;
  color: string;
  summary: string[];
  details: {
    heading: string;
    content: string;
  }[];
  questions: Question[];
  badgeName: string;
}

export interface UserProgress {
  unlockedChapters: number[]; // IDs of unlocked chapters
  completedChapters: number[]; // IDs of completed chapters
  score: number;
  badges: string[];
}