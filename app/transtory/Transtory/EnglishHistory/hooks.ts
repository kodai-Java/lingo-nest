import { useCallback, useEffect, useState } from 'react'

export const useEnglishJapaneseWordTable = () => {
  const [enAndJaWordRows, setEnAndJaWordRows] = useState<EnAndJaWord[]>()
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
  },[])
  return { enAndJaWordRows }
}
