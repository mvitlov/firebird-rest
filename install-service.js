var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Firebird REST API Service',
  description: 'Provides REST API for Firebird Server.',
  script: __dirname + '\\src\\main.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();
