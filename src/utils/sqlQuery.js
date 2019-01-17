const Firebird = require('node-firebird-dev');
const Options = require('./options')();
const convertBufferArray = require('./convertBufferArray');

function sqlQuery(param) {
  return function(req, res) {
    let result = [];
    const sql = req[param].sql;

    if (!sql) {
      return res.send([]);
    }

    Firebird.attach(Options, function(err, db) {
      if (err) {
        db.detach();
        res.status(400); // BAD REQUEST
        return res.send(`\n${err.message}\n`);
      }

      db.query(sql, function(err, data) {
        if (err) {
          db.detach();
          res.status(400); // BAD REQUEST
          return res.send(`\n${err.message}\n`);
        }
        db.detach();
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
}

module.exports = sqlQuery;
