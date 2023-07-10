var http = require('http');
var fs = require('fs');
var data = "\demotetxt.html";
str=""
const httpserver=http.createServer(function (req, res) {
  
  fs.readFile('demotext.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    str=data;
    res.end("<button onClick()> Click Me </button>")
    return res.end();
  });


  fs.writeFile('text2.html',str, (err, data)=>{});
console.log("Data is appended to file successfully.")

});
httpserver.listen(3000,()=>{
    console.log("Listning on port 3000...");
})