//Local Modules:
// const myModule = require('./local-1');
const{a,add} =require('./local-1');
const{a:b,add:add2} = require('./local-2')
// console.log(a,add(2,3))
// console.log(b,add2(4,2,4))


//built-in-module :
const path = require("path");
// console.log(path.dirname("/C: /Users/sumi/Desktop/Level-2/Learning_NodeJS/index.js"));
console.log(path.parse("/C: /Users/sumi/Desktop/Level-2/Learning_NodeJS/index.js"));
