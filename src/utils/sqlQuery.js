const Firebird = require('node-firebird-dev');
const Options = require('./flagParams').options();
const convertBufferArray = require('./convertBufferArray');

const sqlQuery = param => {
  return (req, res) => {
    let result = [];
    const properties = req[param];

    const sql = properties.sql;
    const params = properties.params;

    if (!sql) {
      return res.send(['No valid SQL query found! Please enter a valid SQL query.']);
    }

    Firebird.attach(Options, (err, db) => {
      if (err) {
        db.detach();
        res.status(400); // BAD REQUEST
        return res.send(`\n${err.message}\n`);
      }

      db.query(sql, params, (err, data) => {
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

module.exports = sqlQuery;
