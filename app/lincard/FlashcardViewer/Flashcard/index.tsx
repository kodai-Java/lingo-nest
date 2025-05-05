import React from 'react'

type FlashcardProps = {}
/**
 * 表面(英語)と裏面(日本語)を切り替えて表示
 */
export const Flashcard: React.FC<FlashcardProps> = ({}) => {
  return (
    <div className="w-full max-w-xl p-8 bg-white rounded-2xl border border-gray-200 shadow-md transition-all duration-300 mx-auto my-10">
      <p className="text-2xl font-semibold text-gray-900 mb-6 text-center"></p>
    </div>
  )
}
