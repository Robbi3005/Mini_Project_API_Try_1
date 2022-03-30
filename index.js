// npm i -g nodemon : u/ install nodemon

require ('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//-------------------------------------------------

const router = require('./router/router');
app.use('/', router);

//-------------------------------------------------

// note : buat 2 router : merchant / product

const activeDB = require('./config/setup');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});