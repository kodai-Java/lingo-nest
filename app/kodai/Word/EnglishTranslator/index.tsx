import { Dispatch, FC, SetStateAction, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import { translateEnToJa } from "../../actions";
import { Button, TextField } from "@mui/material";

type EnglishWord = {
    englishWord: string;
}
export const EnglishTranslator: FC = () => {
    const [englishWord, setEnglishWord] = useState<string>()
    const {
        register,
        handleSubmit,
    } = useForm<EnglishWord>()
    const onSubmit: SubmitHandler<EnglishWord> = async (data) => {
        const resultText = await translateEnToJa(data.englishWord);
        setEnglishWord(resultText)
        localStorage.setItem(data.englishWord, resultText)
    }
  return <div>
        <div>テキストボックスに英語を入力してください</div>
        <div>textボタンを押すと翻訳結果が出てきます</div>
        <div>英語と翻訳結果はローカルストレージに保存されます</div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" {...register('englishWord')}/>
            <Button variant="text" type="submit">翻訳</Button>
        </form>
        <div>{englishWord}</div>
  </div>
}