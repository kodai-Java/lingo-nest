import React from 'react'
import { AnswerButton } from './AnswerButton'
import { Flashcard } from './Flashcard'

type FlashcardViewerProps = {}
/**
 * 現在のカード、記憶状態、モード
 * 表示するカード
 * 各子コンポーネントの構成
 */
export const FlashcardViewer: React.FC<FlashcardViewerProps> = ({}) => {
  return (
    <div>
      <AnswerButton className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100">
        覚えた
      </AnswerButton>
      <AnswerButton className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100">
        覚えてない
      </AnswerButton>
      <AnswerButton className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
        答えを見る
      </AnswerButton>
      <Flashcard />
    </div>
  )
}
