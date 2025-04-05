import { Dispatch, SetStateAction, useCallback, useState } from "react"

type EnAndJaWord = {
    index: number
    englishWord: string
    japaneseWord: string
}
type Props = {
setEnAndJaWordRows: Dispatch<SetStateAction<EnAndJaWord[] | undefined>>
}
export const useEnglishJapaneseWordTable = () => {
  const [enAndJaWordRows, setEnAndJaWordRows] = useState<EnAndJaWord[]>()
  const showEnglishJapaneseWordTable = useCallback(() => {
        setEnAndJaWordRows(
             Object.keys(localStorage).map((key, index) => {
                return {
                    index,
                    englishWord: key,
                    japaneseWord: localStorage.getItem(key)
                } as EnAndJaWord
            })
        )
    },[])
  return {enAndJaWordRows, showEnglishJapaneseWordTable}
}