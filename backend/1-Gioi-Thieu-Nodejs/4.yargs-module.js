// step 1: npm install yargs -s
// step 2: var yargs = require('yargs');
// step 3: var argv = yargs.argv; // lấy hết tham số là Object
//         var argv = yargs.argv._; // lấy hết tham số là mảng    
// step 4: Open cmd
// step 5: node 1-Gioi-Thieu/4.yargs-module.js huy nguyen hoặc node 1-Gioi-Thieu/4.yargs-module.js --name huy --age 26

var yargs = require('yargs');

// Lấy hết tham số là Objecy
var argvObj = yargs.argv;
console.log(argvObj);