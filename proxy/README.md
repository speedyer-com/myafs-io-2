1. Setup Node.js and Express Project with cors and axios

mkdir proxy
cd proxy
npm init -y
npm install express cors axios

2. Create server.js

const express = require('express');
const cors = require('cors');
const axios = require('axios'); 

const app = express();
const port = 3001; // Choose your desired port

app.use(cors()); // Enable CORS if necessary

app.get('/proxy', async (req, res) => {
  try {
    const url = req.query.url; // Get the target URL from the query parameter

    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3' // Set a user-agent to mimic a browser
      }
    });

    res.send(response.data); // Send the fetched content to the client
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});

3. Update iframe

<iframe 
  src="http://localhost:3001/proxy?url=https://yahoo.com" 
  className="w-full min-h-[calc(100vh-12rem)] border border-[#460073] rounded-lg" 
  title="Yahoo Proxy" 
/>