// const { PRIORITY_LOW } = require('node:constants');
const os = require('os');

// to find architecture of your systedm
console.log(os.arch());

// hostname
console.log(os.hostname());

// platform
console.log(os.platform());

//free space
console.log(os.freemem()/1024/1024/1024);

// total space

console.log(os.totalmem()/1024/1024/1024);

// type
console.log(os.type());