// 'use server'
export const sendEnglishWord = async (word: string) => {
  // どうやってnetlifyのprodのURLに変更しようか
//   const netlifyUrlLocal = `http://localhost:8888/.netlify/functions/translate?text=${word}`
  const netlifyUrlProd = `https://lingo-nest.netlify.app/.netlify/functions/translate?text=${word}`
     const resultText: string = await fetch(
         netlifyUrlProd,
          {
              method: 'GET',
          }
      ).then((res) => {
          return res.json()
      })
      return resultText
}
