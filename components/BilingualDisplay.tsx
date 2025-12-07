import React from 'react';
import { BilingualText } from '../types';

interface Props {
  text: BilingualText;
  className?: string;
  block?: boolean;
}

export const BilingualDisplay: React.FC<Props> = ({ text, className = "", block = false }) => {
  if (block) {
    return (
      <div className={className}>
        {/* Increased to text-2xl and font-bold for main English text */}
        <p className="text-gray-800 text-2xl leading-relaxed font-bold">{text.en}</p>
        {/* Increased to text-lg for Chinese text */}
        <p className="text-gray-500 text-lg mt-1 font-medium">({text.cn})</p>
      </div>
    );
  }
  
  return (
    <span className={className}>
      <span className="text-gray-800 font-bold text-xl">{text.en}</span>
      {/* Increased inline Chinese to text-base */}
      <span className="text-gray-500 text-base ml-2 font-medium">({text.cn})</span>
    </span>
  );
};