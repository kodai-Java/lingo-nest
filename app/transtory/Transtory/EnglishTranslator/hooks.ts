import { SubmitHandler } from 'react-hook-form'
import { sendEnglishWord } from '../../actions'
import { useJapaneseWordStore } from '../../stores'

export const useEnglishTranslator = () => {
  const { japaneseWord, updateJapaneseWord } = useJapaneseWordStore((state) => state)
  const onSubmitEnglish: SubmitHandler<EnglishWord> = async (data) => {
    //TODO 仮でバリデーション設置 zodに置き換え
    if (!data.englishWord || data.englishWord.length > 150) {
      return;
    }
    const resultText = await sendEnglishWord(data.englishWord)
    updateJapaneseWord(resultText)
    localStorage.setItem(data.englishWord, resultText)
  }
  return { japaneseWord, onSubmitEnglish }
}
