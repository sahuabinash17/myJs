const fs = require('fs');

fs.writeFileSync('readme.txt',"let's make some NodeJS" );

fs.appendFileSync('readme.txt', ' NodeJs is a javaScript run time environment that executing on server side');

const bufData = fs.readFileSync('readme.txt');
console.log(bufData);
const cData = bufData.toString();
console.log(cData);