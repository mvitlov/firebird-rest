const Firebird = require('node-firebird-dev');
const Options = require('./options')();
const convertBufferArray = require('./convertBufferArray');

const sqlQuery = param => {
  return (req, res) => {
    let result = [];
    const sql = req[param].sql;

    if (!sql) {
      return res.send([]);
    }

    Firebird.attach(Options, (err, db) => {
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
        console.log(data);
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
