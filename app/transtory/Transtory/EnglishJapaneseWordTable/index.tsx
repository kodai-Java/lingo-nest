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

export const EnglishJapaneseWordTable: FC = () => {
  const { enAndJaWordRows, showEnglishJapaneseWordTable } = useEnglishJapaneseWordTable()

  return (
    <TableContainer component={Paper} sx={{ width: 500 }}>
      <Button onClick={showEnglishJapaneseWordTable}>表示</Button>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>English</TableCell>
            <TableCell>Japanese</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {enAndJaWordRows &&
            enAndJaWordRows.map((row) => (
              <TableRow key={row.englishWord}>
                <TableCell component="th" scope="row">
                  {row.index}
                </TableCell>
                <TableCell>{row.englishWord}</TableCell>
                <TableCell>{row.japaneseWord}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
