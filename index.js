// http package created
const http = require('http');

// http server created
const server = http.createServer(function(req,res){
    console.log("The request url is: ");
    console.log(req.url);
    
    //basic routing
    if(req.url == '/'){
        res.end("This is the homepage");
    }
    else if(req.url == '/item'){
        res.statusCode = 200;
        res.end("This is in the item page");
    }
    else{
        res.statusCode = 404;
        res.end("This is not the home page");
    }
});

// server listen calling
server.listen(3000,localhost,function(){
    console.log("This part is: ");
    console.log(server.address().port);
});