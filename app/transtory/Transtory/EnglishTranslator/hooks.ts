import { SubmitHandler } from 'react-hook-form'
import { sendEnglishWord } from '../../actions'
import { useJapaneseWordStore } from '../../stores'

export const useEnglishTranslator = () => {
  const { japaneseWord, updateJapaneseWord } = useJapaneseWordStore((state) => state)
  const onSubmitEnglish: SubmitHandler<EnglishWord> = async (data) => {
    if (data.englishWord.length > 150) {
      return;
    }
    const resultText = await sendEnglishWord(data.englishWord)
    updateJapaneseWord(resultText)
    localStorage.setItem(data.englishWord, resultText)
  }
  return { japaneseWord, onSubmitEnglish }
}
