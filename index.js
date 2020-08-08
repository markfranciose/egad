'use strict'

var argv = require('minimist')(process.argv.slice(2));
var baseOptions = argv._
var firstOption = baseOptions[0];

var { mainHelp } = require('./lib/help');
var options = {
  'help': mainHelp,
};

/* basic help printing */
if (argv.h || argv.help) mainHelp();
if ( Object.keys(options).includes(firstOption) ) {
  options[firstOption]();
}
