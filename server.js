
const express = require('express');

const app = express();

app.use(express.static('static'));
app.use(function(req,res,next){
  console.log("this is a function that runs for all requests");
  return next();
});

app.get('/route1', function(req,res){
  console.log(req.query);
  res.sendFile(__dirname+'/views/members.html');
});

app.get('/route2', function(req,res){
  res.send("this is route 2");
});

app.listen(3030, function(){
  console.log("app listening on port 3030");
});
