var exec = require('child_process').exec;

var path = require('path');
module.exports = function() {
  var cppo = path.join(__dirname, './cppo');
  var args = Array.prototype.slice.call(arguments);
  var callback = function() {};
  if (typeof args[args.length - 1] === 'function') {
    callback = args.pop();
  }
  var cmd = [cppo].concat(args).join(' ');
  exec(cmd, function(error, stdout, stderr) {
    if (error) {
      throw error;
    }
    if(stdout) console.log(stdout);
    callback();
  });
};
