exports.handler = async (event) => {
    const headers = event.headers;
    const path = event.queryStringParameters.path || "unknown";
  
    const ip = headers["x-forwarded-for"] || "unknown";
    const userAgent = headers["user-agent"] || "unknown";
    const now = new Date().toISOString();
  
    console.log(`[VISIT] ${now} - ${ip} - ${path} - ${userAgent}`);
  
    return {
      statusCode: 204,
    };
  };
  