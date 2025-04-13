import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import { useEnglishTranslator } from './hooks'

/**
 * 翻訳エリア
 */
export const EnglishTranslator: FC = () => {
  const { register, handleSubmit } = useForm<EnglishWord>()
  const { englishWord, onSubmitEnglish } = useEnglishTranslator()
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold mb-4">Translate</h1>
      <label className="text-sm font-medium mb-1">English</label>
      <textarea
        placeholder="Type text here..."
        className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
      ></textarea>
      <label className="text-sm font-medium mb-1">Japanese</label>
      <div className="w-full h-40 p-4 bg-gray-100 border border-gray-200 rounded-lg overflow-y-auto">
        日本語の訳文がここに表示されます。
      </div>
      <button className="mt-4 self-start px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition">
        翻訳する
      </button>
    </div>
  )
}
