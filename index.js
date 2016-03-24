var menubar = require('menubar')
var ipc = require('electron').ipcMain
menubar()

ipc.on('got-called', function() {
  console.log('I got called!');
})
