const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const targetUrl = 'https://outlier.ai'; // Replace with your target URL
  
  try {
    const response = await fetch(targetUrl, {
      method: event.httpMethod,
      headers: event.headers,
      body: event.body,
    });

    return {
      statusCode: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
      body: await response.text(),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch target URL' }),
    };
  }
};
