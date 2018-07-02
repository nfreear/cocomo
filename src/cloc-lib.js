/*!

  © Nick Freear, 03-May-2018.
*/

const CLOC = 'node_modules/.bin/cloc --exclude-dir=.git --json ';
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;

function execute (command, callback) {
    exec(command, function (error, stdout, stderr) {
      callback(stdout, stderr);
    });
};

module.exports = function (dir) {
  const CLOC_CMD = CLOC + dir;

  var result = execSync(CLOC_CMD);

  var output = JSON.parse(result.stdout);

  return {
    header:  output.header,
    warnings: result.stderr,
    report: output
  };

  /* return execute(CLOC_CMD, function (json, stderr) {
    // console.log( 'XX ' + output + ' YY');

    var output = JSON.parse(json);

    return {
      header:  output.header,
      warnings: stderr,
      report: output
    };
  }); */
}

// End.
