export const handler = async (event, context) => {
  console.log('translate function called')
  const word = event.queryStringParameters.text
  console.log(word)
  const url = `https://api-free.deepl.com/v2/translate?text=${word}&source_lang=EN&target_lang=JA`
  const resultText = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${process.env.DEEPL_AUTH_KEY}`,
      ContentType: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((json) => {
      const resultText = json.translations[0].text
      console.log(resultText)
      return resultText
    })

  return {
    statusCode: 200,
    body: JSON.stringify(resultText),
  }
}
