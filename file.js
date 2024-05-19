const fs =require('fs');

// reading a file text
const readText = fs.readFileSync("./texts/read.txt",'utf-8')
// console.log(readText);
//write a text:
const writeText = fs.writeFileSync("./texts/write.txt",readText + "This is my written Text")
console.log(writeText);