import { FC, useState } from "react"
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { useEnglishTranslator } from "./hooks";

export type EnglishWord = {
    englishWord: string;
}
export const EnglishTranslator: FC = () => {
    const [englishWord, setEnglishWord] = useState<string>()
    const {
        register,
        handleSubmit,
    } = useForm<EnglishWord>()
    const {onSubmitEnglish} = useEnglishTranslator({setEnglishWord});
  return <div>
        <div>テキストボックスに英語を入力してください</div>
        <div>textボタンを押すと翻訳結果が出てきます</div>
        <div>英語と翻訳結果はローカルストレージに保存されます</div>
        <form onSubmit={handleSubmit(onSubmitEnglish)}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" {...register('englishWord')}/>
            <Button variant="text" type="submit">翻訳</Button>
        </form>
        <div>{englishWord}</div>
  </div>
}