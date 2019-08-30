var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Firebird REST API Service',
  script: __dirname + '\\src\\main.js'
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

// Uninstall the service.
svc.uninstall();
