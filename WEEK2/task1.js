const http = require("http");
const httpserver = http.createServer(function(req,res){
   res.end("HELLO");
});
httpserver.listen(3000,()=>{
    console.log("Listning on port 3000...");
})