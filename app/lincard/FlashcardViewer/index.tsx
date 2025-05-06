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
      <Flashcard />
    </div>
  )
}
