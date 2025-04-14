import { useEffect, useState } from 'react'
import { useJapaneseWordStore } from '../../store'

export const useEnglishJapaneseWordTable = () => {
  const [enAndJaWordRows, setEnAndJaWordRows] = useState<EnAndJaWord[]>()
  const { japaneseWord } = useJapaneseWordStore((state) => state)
  useEffect(()=>{
    setEnAndJaWordRows(
      Object.keys(localStorage).map((key, index) => {
        return {
          index: index + 1,
          englishWord: key,
          japaneseWord: localStorage.getItem(key),
        } as EnAndJaWord
      })
    )
  },[japaneseWord])
  return { enAndJaWordRows }
}
