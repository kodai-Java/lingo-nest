//todo tsにする
exports.handler = async function (event, context) {
  console.log('transrate functionきた')
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
    .then((res) => {
      return res.json()
    })
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
