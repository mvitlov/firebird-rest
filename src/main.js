#!/usr/bin/env node

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const port1 = require('./utils/flagParams').serverPort1();
const activeDBs = require('./utils/flagParams').activeDBs();
const flagMode = require('./utils/flagParams').flagMode;
const sqlQuerys = require('./utils/sqlQuery')
const app1 = express();
const app2 = express();
const app3 = express();
const app4 = express();
const app5 = express();


app1.use(compression()); // attempt to compress response bodies
app1.use(bodyParser.urlencoded({
  extended: false,
  limit: '1mb'
})); // parsing the URL-encoded data with the ```querystring``` library
app1.use(bodyParser.json({
  limit: '1mb'
})); // maximum request body size
app1.use((req, res, next) => {
  req.connection.setTimeout(4 * 60 * 1000); // 4 minutes
  res.connection.setTimeout(4 * 60 * 1000); // 4 minutes
  next();
});

app1.get('/', sqlQuerys.sqlQuery1('query')); // parse SQL queries via http GET request
app1.post('/', sqlQuerys.sqlQuery1('body')); // parse SQL queries via http POST request

// RUN FIREBIRD SERVER
app1.listen(port1, () => console.log(`Database 1:\n\rFirebird Server up and running on\n\rhttp://localhost:${port1}`));

if (flagMode == "False") {
  if (activeDBs.db2 == "True") {
    const port2 = require('./utils/flagParams').serverPort2();
    app2.use(compression()); // attempt to compress response bodies
    app2.use(bodyParser.urlencoded({// parsing the URL-encoded data with the ```querystring``` library
      extended: false,
      limit: '1mb'
    }));
    app2.use(bodyParser.json({ // maximum request body size
      limit: '1mb'
    }));
    app2.use((req, res, next) => {
      req.connection.setTimeout(4 * 60 * 1000); // 4 minutes
      res.connection.setTimeout(4 * 60 * 1000); // 4 minutes
      next();
    });

    app2.get('/', sqlQuerys.sqlQuery2('query')); // parse SQL queries via http GET request
    app2.post('/', sqlQuerys.sqlQuery2('body')); // parse SQL queries via http POST request

    app2.listen(port2, () => console.log(`Database 2:\n\rFirebird Server up and running on\n\rhttp://localhost:${port2}`));
  }
  if (activeDBs.db3 == "True") {
    const port3 = require('./utils/flagParams').serverPort3();
    app3.use(compression()); // attempt to compress response bodies
    app3.use(bodyParser.urlencoded({
      extended: false,
      limit: '1mb'
    })); // parsing the URL-encoded data with the ```querystring``` library
    app3.use(bodyParser.json({
      limit: '1mb'
    })); // maximum request body size
    app3.use((req, res, next) => {
      req.connection.setTimeout(4 * 60 * 1000); // 4 minutes
      res.connection.setTimeout(4 * 60 * 1000); // 4 minutes
      next();
    });

    app3.get('/', sqlQuerys.sqlQuery3('query')); // parse SQL queries via http GET request
    app3.post('/', sqlQuerys.sqlQuery3('body')); // parse SQL queries via http POST request

    app3.listen(port3, () => console.log(`Database 3:\n\rFirebird Server up and running on\n\rhttp://localhost:${port3}`));
  }
  if (activeDBs.db4 == "True") {
    const port4 = require('./utils/flagParams').serverPort4();
    app4.use(compression()); // attempt to compress response bodies
    app4.use(bodyParser.urlencoded({
      extended: false,
      limit: '1mb'
    })); // parsing the URL-encoded data with the ```querystring``` library
    app4.use(bodyParser.json({
      limit: '1mb'
    })); // maximum request body size
    app4.use((req, res, next) => {
      req.connection.setTimeout(4 * 60 * 1000); // 4 minutes
      res.connection.setTimeout(4 * 60 * 1000); // 4 minutes
      next();
    });

    app4.get('/', sqlQuerys.sqlQuery4('query')); // parse SQL queries via http GET request
    app4.post('/', sqlQuerys.sqlQuery4('body')); // parse SQL queries via http POST request

    app4.listen(port4, () => console.log(`Database 4:\n\rFirebird Server up and running on\n\rhttp://localhost:${port4}`));
  }
  if (activeDBs.db5 == "True") {
    const port5 = require('./utils/flagParams').serverPort5();
    app5.use(compression()); // attempt to compress response bodies
    app5.use(bodyParser.urlencoded({
      extended: false,
      limit: '1mb'
    })); // parsing the URL-encoded data with the ```querystring``` library
    app5.use(bodyParser.json({
      limit: '1mb'
    })); // maximum request body size
    app5.use((req, res, next) => {
      req.connection.setTimeout(4 * 60 * 1000); // 4 minutes
      res.connection.setTimeout(4 * 60 * 1000); // 4 minutes
      next();
    });

    app5.get('/', sqlQuerys.sqlQuery5('query')); // parse SQL queries via http GET request
    app5.post('/', sqlQuerys.sqlQuery5('body')); // parse SQL queries via http POST request

    app5.listen(port5, () => console.log(`Database 5:\n\rFirebird Server up and running on\n\rhttp://localhost:${port5}`));
  }

}
