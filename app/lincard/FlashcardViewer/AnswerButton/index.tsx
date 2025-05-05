import React, { MouseEventHandler } from 'react'

type AnswerButtonsProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
  className?: string
}
/**
 * 覚えた覚えてないの操作を表示
 */
export const AnswerButton: React.FC<AnswerButtonsProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`font-medium px-4 py-2 border rounded-xl ${className}`}>
      {children}
    </button>
  )
}
