const http = require('http');
// create your own  web-server
// createServer(callback function pass)
// callback function request and response
const server = http.createServer((req,res)=>{
//  console.log(req.url);
if(req.url=='/')
{
    res.end('hello from home side');
}
else if(req.url=='/about')
{
    res.end('hello from about side');
}
else if(req.url=='/contactus')
{
    res.end('hello from contactus side');
}
else{
    res.writeHead(404,{"content-type":"text/html"});
    res.end('<h1>404 error! page not exist</h1>');
}
    
});
// reuest -> listen(portno.,localhost,)
server.listen(8000,"127.0.0.1",() =>{

    console.log("listening to the port no. 8000");
});