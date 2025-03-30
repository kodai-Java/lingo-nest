exports.handler = async function(event, context) {
  // Get HTTP method
  const method = event.httpMethod;
  
  // Get query parameters
  const params = event.queryStringParameters;
  
  // Get POST data
  let data = {};
  if (method === "POST") {
    try {
      data = JSON.parse(event.body);
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid JSON" })
      };
    }
  }

  // Handle different HTTP methods
  switch (method) {
    case "GET":
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "GET request received", params })
      };
    
    case "POST":
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "POST request received", data })
      };
    
    default:
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" })
      };
  }
}