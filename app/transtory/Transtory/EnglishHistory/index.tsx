import { FC } from 'react'
import { useEnglishJapaneseWordTable } from './hooks'

/**
 * 履歴エリア
 */
export const EnglishHistory: FC = () => {
  const { enAndJaWordRows } = useEnglishJapaneseWordTable()

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">History</h2>
      <div className="space-y-4 overflow-y-auto max-h-[500px]">
        {enAndJaWordRows?.map((row, index) => {
          return <div key={index} className="border border-gray-200 rounded-lg p-4">
            <p className="text-base font-medium mb-1">EN: {row.englishWord}</p>
            <p className="text-base font-medium">JP: {row.japaneseWord}</p>
        </div>
        })}
      </div>
    </div>
  )
}
