const express = require('express');
const router = express.Router();
const url = require('url');
const jwt = require('jsonwebtoken');

const IndexController = require('../controller/IndexController')

router.get("/",(req,res,next)=>{
 res.send("<h1>MERN server side is working</h1>");    
})

  router.get('/userRegister',(req, res, next)=>{
    userDetails=url.parse(req.url,true).query;
    IndexController.userRegister(userDetails).then((result)=>{
      sendMail(req.body.username,req.body.password)
      res.json({"output":"user register success"});  
    }).catch((err)=>{
        res.json({"output":err});
    })
  });
  
  
  router.get('/userLogin',(req, res, next)=>{
    userDetails=url.parse(req.url,true).query
    IndexController.userLogin(userDetails).then((result)=>{
    
    if(result.length==0)
		{
			req.session.token='error'
			res.send({'token':'error'})
		}
		else
		{	
			var payload={'subject':result[0].username}
			var token=jwt.sign(payload,"cnncncncncn")
			req.session.token=token
      res.send({'token':token,'userDetails':result[0]})
		}
    }).catch((err)=>{
      res.send({'token':'error'})	  
    })
  });

module.exports = router