const http = require("http");
const myServer = http.createServer((req,res)=>{
    console.log("new req recorded")
    res.end("aksham")
});
myServer.listen(4000, ()=> console.log("server started"));