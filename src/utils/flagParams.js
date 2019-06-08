const flags = require('flags');
var fs = require("fs");
const path = require('path');
var config = fs.readFileSync(path.resolve("./utils","./config.json"));
var jsonConfig = JSON.parse(config);

flags.defineNumber('port', '4444', 'Port that app listens to');
flags.defineString('h', 'localhost', 'Firebird Host');
flags.defineNumber('p', '3050', 'Firebird Port');
flags.defineString('db', 'NO_DATABASE', 'Absolute path to Firebird Database');
flags.defineString('u', 'SYSDBA', 'Firebird User');
flags.defineString('pw', 'masterkey', 'Firebird User Password');
flags.defineString('r', null, 'Firebird User Role');

flags.parse();

var flagMode = "False";
var activeDBs;
var options1;
var options2;
var options3;
var options4;
var options5;
var serverPort1;
var serverPort2;
var serverPort3;
var serverPort4;
var serverPort5;

//If the flag mode is active, fill options1 with flags
if (flags.get('db') != 'NO_DATABASE') {
  flagMode = "True";
  options1 = () => {
    return {
      host: flags.get('h'),
      port: flags.get('p'),
      database: flags.get('db'),
      user: flags.get('u'),
      password: flags.get('pw'),
      role: flags.get('r')
    };
  };
  serverPort1 = () => {
    return flags.get('port');
  };
  activeDBs = () => {
    return {
      db1: "True",
      db2: "False",
      db3: "False",
      db4: "False",
      db5: "False"
    }
  }
}
//If the flag mode is not active fill options 1 - 5 with config.json params
else {
  //Database 1.
  if (jsonConfig.options1.active == "True") {
    options1 = () => {
      return {
        host: jsonConfig.options1.host,
        port: jsonConfig.options1.port,
        database: jsonConfig.options1.database,
        user: jsonConfig.options1.user,
        password: jsonConfig.options1.password,
        role: jsonConfig.options1.role
      };
    };
    serverPort1 = () => {
      return jsonConfig.options1.srvPort;
    };
  }
  //Database 2.
  if (jsonConfig.options2.active == "True") {
    options2 = () => {
      return {
        host: jsonConfig.options2.host,
        port: jsonConfig.options2.port,
        database: jsonConfig.options2.database,
        user: jsonConfig.options2.user,
        password: jsonConfig.options2.password,
        role: jsonConfig.options2.role
      };
    };
    serverPort2 = () => {
      return jsonConfig.options2.srvPort;
    };
  }
  //Database 3.
  if (jsonConfig.options3.active == "True") {
    options3 = () => {
      return {
        host: jsonConfig.options3.host,
        port: jsonConfig.options3.port,
        database: jsonConfig.options3.database,
        user: jsonConfig.options3.user,
        password: jsonConfig.options3.password,
        role: jsonConfig.options3.role
      };
    };
    serverPort3 = () => {
      return jsonConfig.options3.srvPort;
    };
  }
  //Database 4.
  if (jsonConfig.options4.active == "True") {
    options4 = () => {
      return {
        host: jsonConfig.options4.host,
        port: jsonConfig.options4.port,
        database: jsonConfig.options4.database,
        user: jsonConfig.options4.user,
        password: jsonConfig.options4.password,
        role: jsonConfig.options4.role
      };
    };
    serverPort4 = () => {
      return jsonConfig.options4.srvPort;
    };
  }
  //Database 5.
  if (jsonConfig.options5.active == "True") {
    options5 = () => {
      return {
        host: jsonConfig.options5.host,
        port: jsonConfig.options5.port,
        database: jsonConfig.options5.database,
        user: jsonConfig.options5.user,
        password: jsonConfig.options5.password,
        role: jsonConfig.options5.role
      };
    };
    serverPort5 = () => {
      return jsonConfig.options5.srvPort;
    };
  }
  //Active Databases.
  activeDBs = () => {
    return {
      db1: jsonConfig.options1.active,
      db2: jsonConfig.options2.active,
      db3: jsonConfig.options3.active,
      db4: jsonConfig.options4.active,
      db5: jsonConfig.options5.active
    };
  };
}

module.exports = {
  options1: options1,
  serverPort1: serverPort1,
  options2: options2,
  serverPort2: serverPort2,
  options3: options3,
  serverPort3: serverPort3,
  options4: options4,
  serverPort4: serverPort4,
  options5: options5,
  serverPort5: serverPort5,
  flagMode: flagMode,
  activeDBs: activeDBs
};
