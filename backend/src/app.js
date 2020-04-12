const express = require('express');
const cors = require('cors');

//const upload = multer({dest:'uploads/'});
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;