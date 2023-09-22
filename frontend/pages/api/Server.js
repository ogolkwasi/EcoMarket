// server.js

const express = require('express');
const cors = require('cors'); 
const path = require('path');
const fs = require('fs'); 

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

const filePath = path.join(__dirname, 'metadata', 'metadata.json'); // Fix the file path

// GET route for fetching metadata
app.get('/api/metadata', (req, res) => {
  // Read and send the JSON data to the client
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8')); // Use the correct file path
  res.json(jsonData);
});

// POST route for updating metadata
app.post('/api/metadata', (req, res) => {
  try {
    // Replace 'updatedData' with the data you want to write to the file
    const updatedData = req.body; // Assuming you're sending the updated data in the request body
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8'); // Use the correct file path
    console.log('Data updated successfully');
    res.status(200).send('Data updated successfully'); // Send a response to the client
  } catch (error) {
    console.error('Error writing to metadata.json:', error);
    res.status(500).send('Error writing to metadata.json'); // Send an error response to the client
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
