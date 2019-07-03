const Firebird = require('node-firebird-dev');
const convertBufferArray = require('./convertBufferArray');

var sqlQuery1 = param => {
  const Options1 = require('./flagParams').options1();
  return (req, res) => {
    let result = [];
    const sql = req[param].sql;
    if (!sql) {
      return res.send(['No valid SQL query found! Please enter a valid SQL query.']);
    }
    Firebird.attach(Options1, (err, db) => {
      if (err) {
        db.detach();
        res.status(400); // BAD REQUEST
        return res.send(`\n${err.message}\n`);
      }

      db.query(sql, (err, data) => {
        if (err) {
          db.detach();
          res.status(400); // BAD REQUEST
          return res.send(`\n${err.message}\n`);
        }
        db.detach();

        // CONVERT RAW QUERY RESULT AND RETURN JSON
        data.forEach(row => {
          let tempObj = {};
          Object.keys(row).forEach(el => {
            tempObj[el] = convertBufferArray(row[el]);
          });
          result.push(tempObj);
        });
        return res.send(result);
      });
    });
  };
};

var sqlQuery2 = param => {
  const Options2 = require('./flagParams').options2();
  return (req, res) => {
    let result = [];
    const sql = req[param].sql;
    if (!sql) {
      return res.send(['No valid SQL query found! Please enter a valid SQL query.']);
    }
    Firebird.attach(Options2, (err, db) => {
      if (err) {
        db.detach();
        res.status(400); // BAD REQUEST
        return res.send(`\n${err.message}\n`);
      }

      db.query(sql, (err, data) => {
        if (err) {
          db.detach();
          res.status(400); // BAD REQUEST
          return res.send(`\n${err.message}\n`);
        }
        db.detach();

        // CONVERT RAW QUERY RESULT AND RETURN JSON
        data.forEach(row => {
          let tempObj = {};
          Object.keys(row).forEach(el => {
            tempObj[el] = convertBufferArray(row[el]);
          });
          result.push(tempObj);
        });
        return res.send(result);
      });
    });
  };
};

var sqlQuery3 = param => {
  const Options3 = require('./flagParams').options3();
  return (req, res) => {
    let result = [];
    const sql = req[param].sql;
    if (!sql) {
      return res.send(['No valid SQL query found! Please enter a valid SQL query.']);
    }
    Firebird.attach(Options3, (err, db) => {
      if (err) {
        db.detach();
        res.status(400); // BAD REQUEST
        return res.send(`\n${err.message}\n`);
      }

      db.query(sql, (err, data) => {
        if (err) {
          db.detach();
          res.status(400); // BAD REQUEST
          return res.send(`\n${err.message}\n`);
        }
        db.detach();

        // CONVERT RAW QUERY RESULT AND RETURN JSON
        data.forEach(row => {
          let tempObj = {};
          Object.keys(row).forEach(el => {
            tempObj[el] = convertBufferArray(row[el]);
          });
          result.push(tempObj);
        });
        return res.send(result);
      });
    });
  };
};

var sqlQuery4 = param => {
  const Options4 = require('./flagParams').options4();
  return (req, res) => {
    let result = [];
    const sql = req[param].sql;
    if (!sql) {
      return res.send(['No valid SQL query found! Please enter a valid SQL query.']);
    }
    Firebird.attach(Options4, (err, db) => {
      if (err) {
        db.detach();
        res.status(400); // BAD REQUEST
        return res.send(`\n${err.message}\n`);
      }

      db.query(sql, (err, data) => {
        if (err) {
          db.detach();
          res.status(400); // BAD REQUEST
          return res.send(`\n${err.message}\n`);
        }
        db.detach();

        // CONVERT RAW QUERY RESULT AND RETURN JSON
        data.forEach(row => {
          let tempObj = {};
          Object.keys(row).forEach(el => {
            tempObj[el] = convertBufferArray(row[el]);
          });
          result.push(tempObj);
        });
        return res.send(result);
      });
    });
  };
};

var sqlQuery5 = param => {
  const Options5 = require('./flagParams').options5();
  return (req, res) => {
    let result = [];
    const sql = req[param].sql;
    if (!sql) {
      return res.send(['No valid SQL query found! Please enter a valid SQL query.']);
    }
    Firebird.attach(Options5, (err, db) => {
      if (err) {
        db.detach();
        res.status(400); // BAD REQUEST
        return res.send(`\n${err.message}\n`);
      }

      db.query(sql, (err, data) => {
        if (err) {
          db.detach();
          res.status(400); // BAD REQUEST
          return res.send(`\n${err.message}\n`);
        }
        db.detach();

        // CONVERT RAW QUERY RESULT AND RETURN JSON
        data.forEach(row => {
          let tempObj = {};
          Object.keys(row).forEach(el => {
            tempObj[el] = convertBufferArray(row[el]);
          });
          result.push(tempObj);
        });
        return res.send(result);
      });
    });
  };
};

module.exports.sqlQuery1 = sqlQuery1;
module.exports.sqlQuery2 = sqlQuery2;
module.exports.sqlQuery3 = sqlQuery3;
module.exports.sqlQuery4 = sqlQuery4;
module.exports.sqlQuery5 = sqlQuery5;
