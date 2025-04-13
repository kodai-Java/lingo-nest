import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { FC } from 'react'
import { useEnglishJapaneseWordTable } from './hooks'

/**
 * 履歴エリア
 */
export const EnglishHistory: FC = () => {
  const { enAndJaWordRows, showEnglishJapaneseWordTable } = useEnglishJapaneseWordTable()

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">History</h2>
      <div className="space-y-4 overflow-y-auto max-h-[500px]">
        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-base font-medium mb-1">EN: What is your name?</p>
          <p className="text-base font-medium">JP: お名前は何ですか？</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-base font-medium mb-1">EN: I love programming.</p>
          <p className="text-base font-medium">JP: プログラミングが大好きです。</p>
        </div>
      </div>
    </div>
  )
}
