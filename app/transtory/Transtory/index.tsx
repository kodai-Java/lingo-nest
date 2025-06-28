import { FC } from 'react'
import { EnglishTranslator } from './EnglishTranslator'
import { EnglishHistory } from './EnglishHistory'

/**
 * 入力された文字をローカルストレージに保存する
 * */
export const Transtory: FC = () => {
  return (
    <div className="max-w-5xl min-w-xl py-10 px-5 grid grid-cols-2 gap-8 mx-auto">
      <EnglishTranslator />
      <EnglishHistory />
    </div>
  )
}
export default Transtory
