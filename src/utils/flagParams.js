const flags = require('flags');

flags.defineNumber('port', '4444', 'Port that app listens to');
flags.defineString('h', 'localhost', 'Firebird Host');
flags.defineNumber('p', '3050', 'Firebird Port');
flags.defineString('db', '/opt/firebird/examples/empbuild/employee.fdb', 'Absolute path to Firebird Database');
flags.defineString('u', 'SYSDBA', 'Firebird User');
flags.defineString('pw', 'masterkey', 'Firebird User Password');
flags.defineString('r', null, 'Firebird User Role');

flags.parse();

const options = () => {
  return {
    host: flags.get('h'),
    port: flags.get('p'),
    database: flags.get('db'),
    user: flags.get('u'),
    password: flags.get('pw'),
    role: flags.get('r')
  };
};

const serverPort = () => {
  return flags.get('port');
};

module.exports = { options: options, serverPort: serverPort };
