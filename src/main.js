#!/usr/bin/env node

const express = require('express');
const compression = require('compression')();
const bodyParser = require('body-parser');
const sqlQuery = require('./utils/sqlQuery');

const app = express();

app.use(compression);
app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' }));
app.use(bodyParser.json({ limit: '1mb' }));
app.use((req, res, next) => {
  req.connection.setTimeout(2 * 60 * 1000); // 2 minutes
  res.connection.setTimeout(2 * 60 * 1000); // 2 minutes
  next();
});

app.get('/', sqlQuery('query'));
app.post('/', sqlQuery('body'));
// app.get('*', (req, res) => res.redirect(308, '/' + req._parsedUrl.search));
// app.post('*', (req, res) => res.redirect(308, '/'));
app.listen(4444, () => {});
