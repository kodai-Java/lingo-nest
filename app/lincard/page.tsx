'use client'

import React, { useMemo, useState } from 'react'
import { useEnglishJapaneseWordTable } from '../transtory/Transtory/EnglishHistory/hooks'
import { FlashcardViewer } from '@/app/lincard/FlashcardViewer'

export default function Page() {
  const { enAndJaWordRows } = useEnglishJapaneseWordTable()

  const [results, setResults] = useState<{ index: number; remembered: boolean }[]>([])
  const [reviewMode, setReviewMode] = useState(false)
  const [current, setCurrent] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const currentCard = useMemo(() => {
    return reviewMode
      ? enAndJaWordRows &&
          enAndJaWordRows.filter((_, i) => {
            const result = results.find((r) => r.index === i)
            return result && !result.remembered
          })
      : enAndJaWordRows && enAndJaWordRows[current]
  }, [enAndJaWordRows, current])

  const handleShowAnswer = () => setShowAnswer(true)

  const handleAnswer = (remembered: boolean) => {
    const originalIndex =
      enAndJaWordRows &&
      currentCard &&
      enAndJaWordRows.findIndex(
        (c) => !Array.isArray(currentCard) && c.englishWord === currentCard?.englishWord
      )
    const updatedResults = results.filter((r) => r.index !== originalIndex)
    if (originalIndex !== undefined) {
      setResults([...updatedResults, { index: originalIndex, remembered }])
    }

    const next = current + 1
    if (enAndJaWordRows && next < enAndJaWordRows.length) {
      setCurrent(next)
    } else {
      setReviewMode(false)
      setCurrent(0)
    }
    setShowAnswer(false)
  }

  const handleStartReview = () => {
    setReviewMode(true)
    setCurrent(0)
    setShowAnswer(false)
  }

  const allAnswered = !reviewMode && results.length >= (enAndJaWordRows?.length ?? 0)

  return (
    <>
      <FlashcardViewer />
      {/* コンポーネント作成 */}
      <div className="w-full max-w-xl p-8 bg-white rounded-2xl border border-gray-200 shadow-md transition-all duration-300 mx-auto my-10">
        <p className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          {currentCard && !Array.isArray(currentCard) && currentCard.englishWord}
        </p>
        {showAnswer ? (
          <>
            <p className="text-xl text-gray-700 mb-8 text-center">
              {currentCard && !Array.isArray(currentCard) && currentCard.japaneseWord}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleAnswer(false)}
                className="px-5 py-2 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-xl hover:bg-red-100 transition"
              >
                覚えてない
              </button>
              <button
                onClick={() => handleAnswer(true)}
                className="px-5 py-2 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition"
              >
                覚えた
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <button
              onClick={handleShowAnswer}
              className="px-6 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition"
            >
              答えを見る
            </button>
          </div>
        )}
        {allAnswered && (
          <button
            onClick={handleStartReview}
            className="mt-6 px-4 py-2 border rounded hover:bg-gray-100"
          >
            覚えてないカードだけ復習する
          </button>
        )}

        <p className="mt-4 text-sm text-gray-500">
          {current + 1} / {enAndJaWordRows?.length ?? 0}（{reviewMode ? '復習モード' : '通常モード'}
          ）
        </p>
      </div>
    </>
  )
}
