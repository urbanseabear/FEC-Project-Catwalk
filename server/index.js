const parser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;
const mainDir = __dirname.substring(0, __dirname.length - 6);
console.log(mainDir);

// middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));
app.use(cors());

app.get('/*', function (req, res) {
  res.sendFile(path.join(mainDir, 'client/dist', 'index.html'));
});

app.listen(port, () => console.log(`listening on port ${port}!`));
