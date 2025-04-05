import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { FC, useCallback, useState } from "react"

type EnAndJaWord = {
    index: number
    englishWord: string
    japaneseWord: string
}
export const EnglishJapaneseWordTable: FC = () => {
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
  return <TableContainer component={Paper} sx={{ width: 500 }}>
        <Button onClick={showEnglishJapaneseWordTable}>表示</Button>
        <Table aria-label="simple table" >
            <TableHead>
                <TableRow>
                    <TableCell>Number</TableCell>
                    <TableCell>English</TableCell>
                    <TableCell>Japanese</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {enAndJaWordRows && enAndJaWordRows.map((row) => (
                        <TableRow
                            key={row.englishWord}
                        >
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
}