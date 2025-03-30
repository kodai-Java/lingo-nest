import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {translateEnToJa} from "@/app/kodai/actions";

type WordInputs = {
    word: string;
}
/**
 * 入力された文字をローカルストレージに保存する
 * */
export const Word:FC = () => {
    const [word, setWord] = useState<string>()
    const {
        register,
        handleSubmit,
    } = useForm<WordInputs>()

    const onSubmit: SubmitHandler<WordInputs> = async (data) => {
        const resultText = await translateEnToJa(data.word);
        setWord(resultText)
        localStorage.setItem(data.word, resultText)
    }

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
            <Button variant="text" type="submit">Text</Button>
        </form>
        <div>{word}</div>
    </div>
}
export default Word;
