var path = require('path');
var spawn = require('child_process').spawn;

var commandStart = (process.platform === "win32" ? 'weinre.cmd' : 'weinre');

var child = spawn(commandStart, ['--boundHost', process.env.HOST || 'localhost', '--httpPort', process.env.PORT || '8080']);

child.stdout.on('data', function (data) {
  console.log('stdout:', data.toString());
});

child.stderr.on('data', function (data) {
  console.log('stderr:', data.toString());
});

child.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});

child.on('error', function(error){
	console.error(error);
});