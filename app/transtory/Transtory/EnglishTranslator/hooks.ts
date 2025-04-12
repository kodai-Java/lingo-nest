import { SubmitHandler } from 'react-hook-form'
import { sendEnglishWord } from '../../actions'
import { useState } from 'react'

export const useEnglishTranslator = () => {
  const [englishWord, setEnglishWord] = useState<string>()
  const onSubmitEnglish: SubmitHandler<EnglishWord> = async (data) => {
    const resultText = await sendEnglishWord(data.englishWord)
    setEnglishWord(resultText)
    localStorage.setItem(data.englishWord, resultText)
  }
  return { englishWord, onSubmitEnglish }
}
