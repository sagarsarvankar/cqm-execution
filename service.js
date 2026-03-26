var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name: 'TopHealth CQM Engine',
  description: 'TopHealth CQM Engine',
  script: 'C:\\Sagar_Data\\SourceRepositoryGitHub\\cqm\\mainengine\\cqm-execution\\server.js'
});

// Listen for the "install" event, which indicates the service is installed
svc.on('install', function () {
  svc.start();
});

// Install the service
svc.install();

// Uninstall the service
/*
svc.on('uninstall', function () {
    console.log('Uninstall complete.');
    console.log('Service exists: ', svc.exists);
  });

svc.uninstall();
*/
// Uninstall the service