export interface BilingualText {
  en: string;
  cn: string;
}

export interface SectionData {
  title: BilingualText;
  content: BilingualText[];
}

export interface QuestionMCQ {
  id: number;
  question: BilingualText;
  options: { id: string; text: BilingualText; isCorrect: boolean; hint?: string }[];
}

export interface QuestionFillBlank {
  id: number;
  textBefore: string;
  answer: string;
  textAfter: string;
  placeholder?: string;
  questionNum: string;
}

export interface QuestionOpen {
  id: number;
  question: BilingualText;
  answer: BilingualText;
  hint?: BilingualText;
}