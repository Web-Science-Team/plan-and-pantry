var express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')))



app.get('/', (req, res) => {
  res.sendFile('/index.html');
})

app.listen(port, () => {
  console.log('Listening on *:3000')
})