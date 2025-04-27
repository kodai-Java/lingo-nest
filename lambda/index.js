exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // ← CORS
      'Access-Control-Allow-Headers': '*', // ← CORS
    },
    body: JSON.stringify({ message: 'Hello, World!' }),
  }
}
