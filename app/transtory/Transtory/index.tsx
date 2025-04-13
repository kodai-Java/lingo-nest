import { FC } from 'react'
import { EnglishJapaneseWordTable } from './EnglishJapaneseWordTable'
import { EnglishTranslator } from './EnglishTranslator'
import { EnglishHistory } from './EnglishHistory'

/**
 * 入力された文字をローカルストレージに保存する
 * */
export const Transtory: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 gap-8">
      <EnglishTranslator />
      <EnglishHistory />
    </div>
  )
}
export default Transtory
