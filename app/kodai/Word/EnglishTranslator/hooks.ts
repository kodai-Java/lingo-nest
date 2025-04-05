import { SubmitHandler } from "react-hook-form";
import { EnglishWord } from ".";
import { sendEnglishWord } from "../../actions";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setEnglishWord: Dispatch<SetStateAction<string | undefined>>
}
export const useEnglishTranslator = ({setEnglishWord}: Props) => {
    const onSubmitEnglish: SubmitHandler<EnglishWord> = async (data) => {
        const resultText = await sendEnglishWord(data.englishWord);
        setEnglishWord(resultText)
        localStorage.setItem(data.englishWord, resultText)
    }
  return {onSubmitEnglish}
}