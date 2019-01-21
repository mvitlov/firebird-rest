#!/usr/bin/env node

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const sqlQuery = require('./utils/sqlQuery');
const port = require('./utils/flagParams').serverPort();
const app = express();

app.use(compression()); // attempt to compress response bodies
app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' })); // parsing the URL-encoded data with the ```querystring``` library
app.use(bodyParser.json({ limit: '1mb' })); // maximum request body size
app.use((req, res, next) => {
  req.connection.setTimeout(2 * 60 * 1000); // 2 minutes
  res.connection.setTimeout(2 * 60 * 1000); // 2 minutes
  next();
});

app.get('/', sqlQuery('query')); // parse SQL queries via http GET request
app.post('/', sqlQuery('body')); // parse SQL queries via http POST request

// RUN FIREBIRD SERVER
app.listen(port, () => console.log(`Firebird Server up and running on\nhttp://localhost:${port}`));
