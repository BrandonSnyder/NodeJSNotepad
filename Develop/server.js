const express = require('express')
const path = require('path')
const fs = require('fs') // might not need 
const {v4: uuidv4} = require('uuid')
const api = require('./routes/index.js');


const PORT = 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for notes http://localhost:3001/notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// GET route for * http://localhost:3001/
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

  // Start server 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
