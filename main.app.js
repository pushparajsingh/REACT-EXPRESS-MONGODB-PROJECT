const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const session = require('express-session');

const indexRouter = require('./server/routes/index'); 

const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({'secret':'my petname is shanky'}));

app.use(express.static(path.join(__dirname, 'build')));

app.use('/webapi',indexRouter);

app.get('*' , function(req,res){
	var mypath=path.join(__dirname,'build/index.html')
	res.sendFile(mypath) 
})

http.createServer(app).listen(3000,()=>{
  console.log('Server Running');
});
