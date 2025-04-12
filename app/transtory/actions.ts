// 'use server'
export const sendEnglishWord = async (word: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
     const resultText: string = await fetch(
         `${apiUrl}/.netlify/functions/translate?text=${word}`,
          {
              method: 'GET',
          }
      ).then((res) => {
          return res.json()
      })
      return resultText
}
