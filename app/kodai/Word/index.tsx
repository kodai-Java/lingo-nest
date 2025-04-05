import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { FC, useCallback, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {translateEnToJa} from "@/app/kodai/actions";

type Word = {
    number: number
    english: string
    japanese: string
}
type WordInputs = {
    word: string;
}
/**
 * 入力された文字をローカルストレージに保存する
 * */
export const Word:FC = () => {
    const [word, setWord] = useState<string>()
    const [wordRows, setWordRows] = useState<Word[]>()
    const {
        register,
        handleSubmit,
    } = useForm<WordInputs>()

    const onSubmit: SubmitHandler<WordInputs> = async (data) => {
        const resultText = await translateEnToJa(data.word);
        setWord(resultText)
        localStorage.setItem(data.word, resultText)
    }
    const showWordTable = useCallback(() => {
        setWordRows(
             Object.keys(localStorage).map((key, index) => {
                return {
                    number: index,
                    english:key,
                    japanese: localStorage.getItem(key)
                } as Word
            })
        )
    },[word])

    /**
     * hello world with netlify
     */
    // const onClickHello = async () => {
    //     console.log('on click hello 来た')
    //     const result = await getHello();
    //     setWord(JSON.stringify(result))
    // }
    return <div>
        <div>テキストボックスに英語を入力してください</div>
        <div>textボタンを押すと翻訳結果が出てきます</div>
        <div>英語と翻訳結果はローカルストレージに保存されます</div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" {...register('word')}/>
            <Button variant="text" type="submit">翻訳</Button>
        </form>
        <div>{word}</div>
        <div>
        <Button onClick={showWordTable}>表示</Button>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Number</TableCell>
                    <TableCell>English</TableCell>
                    <TableCell>Japanese</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {wordRows && wordRows.map((row) => (
                        <TableRow
                            key={row.english}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.number}
                            </TableCell>
                            <TableCell>{row.english}</TableCell>
                            <TableCell>{row.japanese}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
}
export default Word;
