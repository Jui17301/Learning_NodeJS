const http = require('http');

// creating a server using raw node.js
const server = http.createServer();

//Server listener 
server.on('request',(req,res)=>{
  if(req.url === '/read-file' && req.method==="GET"){
    //streaming file
  const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt')
  readableStream.on('data',(buffer)=>{
    res.statusCode = 200;
    res.write(buffer);
  });
  readableStream.on('end',()=>{
    res.statusCode = 200;
    res.end('The streaming is over');
  })
  readableStream.on('error',(err)=>{
    res.statusCode = 500;
    res.end('Something is wrong');
  })
} 
})
server.listen(5000,()=>{
  console.log(`server is listening on port 5000`)
})