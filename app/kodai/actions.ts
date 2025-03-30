// 'use server'
export const translateEnToJa = async (word: string) => {
  // どうやってnetlifyのprodのURLに変更しようか
  const netlifyUrlLocal = `http://localhost:8888/.netlify/functions/translate?text=${word}`
  const netlifyUrlProd = `https://###.netlify.app/.netlify/functions/translate?text=${word}`
     const resultText: string = await fetch(
         netlifyUrlLocal,
          {
              method: 'GET',
          }
      ).then((res) => {
          return res.json()
      })
      return resultText

}

export const getHello = async () => {
  return await fetch(
      `http://localhost:8888/.netlify/functions/hello`,
      {
          method: 'GET',
      }
  ).then((res) => {
      return res.json()
  })
}
