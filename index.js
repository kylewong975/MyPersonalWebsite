/*
var http = require('http'),
    fs = require('fs');
//var express = require('express');
fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env.PORT || 8081);
});
*/

var express = require("express");
var app = express();
app.use('/', express.static(__dirname));
app.listen(process.env.PORT || 3000, function() { console.log('listening')});


/*
var express = require("expiress");
var app = express();
var router = express.Router();
var path = __dirname;

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

router.get("/projects",function(req,res){
  res.sendFile(path + "projects.html");
});

app.use("/",router);

/*
app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});


app.listen(process.env.PORT||3000,function(){
  console.log("Live at Port 3000");
});
*/