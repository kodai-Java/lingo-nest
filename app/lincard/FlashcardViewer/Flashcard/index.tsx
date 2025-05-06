import React, { useState } from 'react'
import { AnswerButton } from '../AnswerButton'
import { useEnglishJapaneseWordTable } from '@/app/transtory/Transtory/EnglishHistory/hooks'

/**
 * 表面(英語)と裏面(日本語)を切り替えて表示
 */
export const Flashcard: React.FC = () => {
  // 英語のフレーズと日本語訳を受け取る
  const { enAndJaWordRows } = useEnglishJapaneseWordTable()
  const [current, setCurrent] = useState(0)
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)
  /**
   * 今カードに表示させる英語と日本語のフレーズを受け取る
   */
  const currentCard = enAndJaWordRows && enAndJaWordRows[current]
  /**
   * 答えを表示する
   */
  const showAnswer = () => {
    setCurrent((prev) => (prev + 1) % (enAndJaWordRows?.length ?? 0))
    setIsAnswerVisible(true)
  }
  /**
   * 答えを非表示にする
   */
  const hideAnswer = () => {
    setIsAnswerVisible(false)
  }
  return (
    <div className="w-full max-w-xl p-8 bg-white rounded-2xl border border-gray-200 shadow-md transition-all duration-300 mx-auto my-10">
      <p className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        {currentCard?.englishWord}
      </p>
      {isAnswerVisible ? (
        <>
          <p className="text-xl text-gray-700 mb-8 text-center">{currentCard?.japaneseWord}</p>
          <div className="flex justify-center gap-4">
            <AnswerButton
              className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
              onClick={hideAnswer}
            >
              覚えた
            </AnswerButton>
            <AnswerButton
              className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
              onClick={hideAnswer}
            >
              覚えてない
            </AnswerButton>
          </div>
        </>
      ) : (
        <div className="text-center">
          <AnswerButton
            className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
            onClick={showAnswer}
          >
            答えを見る
          </AnswerButton>
        </div>
      )}
    </div>
  )
}
