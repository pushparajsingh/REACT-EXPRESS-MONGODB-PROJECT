const res = require('express/lib/response')
var IndexModel = require('../models/IndexModel')

function IndexController()
{
    this.userRegister=(userDetails)=>{
        return new Promise((resolve,reject)=>{
            IndexModel.fetchUsers({}).then((result)=>{
                var l=result.length
                var _id=l==0 ? 1 : result[l-1]._id+1;    
                userDetails={...userDetails,_id:_id,role:'user',status:0,info:Date()}
                IndexModel.userRegisterModel(userDetails).then((result)=>{
                    resolve(result)    
                }).catch((err)=>{
                    reject(err)        
                })                
            }).catch(()=>{
                reject(err)
            })
        })    
    }
    
    this.userLogin=(userDetails)=>{
        return new Promise((resolve,reject)=>{
            userDetails={...userDetails,status:1}
            IndexModel.userLoginModel(userDetails).then((result)=>{
                resolve(result)                 
            }).catch((err)=>{
                reject(err)
            })
        })    
    }
}

module.exports = new IndexController()
