const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const path = require('path');

const app = express();
const port = 3200;

//app.use(express.static(path.join(__dirname, '../frontend/project/dist/project')));

// here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
function makeHeader(allow, link) {
  return {
    'allow': allow.join(),
    'link': link
  }
}
*/
/*
app.get('/', (req, res) => {
  res.send();
});
*/
/*
app.use(express.static(path.join(__dirname, '../frontend/project/dist/project')));
app.use('/', express.static('../frontend/project/dist/project'))
*/
app.use(express.static("../frontend/project/dist/project"));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/project/dist/project/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on *:${port}`);
});