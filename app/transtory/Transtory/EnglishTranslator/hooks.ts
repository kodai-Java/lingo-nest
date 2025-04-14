import { SubmitHandler } from 'react-hook-form'
import { sendEnglishWord } from '../../actions'
import { useJapaneseWordStore } from '../../store'

export const useEnglishTranslator = () => {
  const { japaneseWord, updateJapaneseWord } = useJapaneseWordStore((state) => state)
  const onSubmitEnglish: SubmitHandler<EnglishWord> = async (data) => {
    const resultText = await sendEnglishWord(data.englishWord)
    updateJapaneseWord(resultText)
    localStorage.setItem(data.englishWord, resultText)
  }
  return { japaneseWord, onSubmitEnglish }
}
