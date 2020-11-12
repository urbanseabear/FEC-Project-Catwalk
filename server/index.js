const parser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));
app.use(cors());

app.listen(port, () => console.log(`listening on port ${port}!`));
