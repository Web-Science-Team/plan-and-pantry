const express = require('express');
const axios = require('axios')
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../frontend/project/dist/project')));

// here we are configuring express
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 10000 }));

app.get('/', (req, res) => {
  res.send();
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/project/dist/project/index.html"));
})

app.listen(port, () => {
  console.log(`Listening on *:${port}`);
});