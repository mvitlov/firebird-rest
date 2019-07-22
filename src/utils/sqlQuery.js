const Firebird = require('node-firebird-dev');
const Options = require('./flagParams').options();
const convertBufferArray = require('./convertBufferArray');

const sqlQuery = param => {
  return (req, res) => {
    let result = [];
    const properties = req[param];
    
    Options.database = properties.database || Options.database;
    Options.user = properties.user || Options.user;
    Options.password = properties.password || Options.password;
    Options.role = properties.role || Options.role;

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

        if (data) {
          if (Array.isArray(data)) {
            // CONVERT RAW QUERY RESULT AND RETURN JSON
            data.forEach(row => {
              const newRow = convertRow(row);
              result.push(newRow);
            });
          } else {
            const newRow = convertRow(data);
            result = newRow;
          }
        }

        return res.send(result);
      });
    });
  };
};

function convertRow(row) {
  let newRow = {};
  Object.keys(row).forEach(el => {
    newRow[el] = convertBufferArray(row[el]);
  });

  return newRow;
}

module.exports = sqlQuery;
