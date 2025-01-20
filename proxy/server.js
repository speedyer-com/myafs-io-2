const express = require('express');
const cors = require('cors');
const axios = require('axios'); 

const app = express();
const port = 3001; 

app.use(cors()); 

app.get('/', (req, res) => {
    res.send('Proxy server is running!'); 
  });

app.get('/proxy', async (req, res) => {
  try {
    const url = req.query.url; 

    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
      }
    });

    res.send(response.data); 
  } catch (error) {
    console.error(error.response);
    res.status(500).send('Error fetching data' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});