require('./connection')
var RegisterSchemaModel = require('../schema/RegisterSchema')

function IndexModel()
{
    this.userRegisterModel=(userDetails)=>{
        return new Promise((resolve,reject)=>{
            // a document instance
            var obj = new RegisterSchemaModel(userDetails);
 
            // save model to database
            obj.save((err,result)=>{
                err ? reject(err) : resolve(result);            
            });    
        })    
    }

    this.fetchUsers=(condition_obj)=>{
        return new Promise((resolve,reject)=>{
            // to find record from collection
            RegisterSchemaModel.find(condition_obj,(err,result)=>{
                err ? reject(err) : resolve(result);        
            })    
        })
    }
    this.userLoginModel=(userDetails)=>{
        return new Promise((resolve,reject)=>{
            // to find record from collection
            RegisterSchemaModel.find(userDetails,(err,result)=>{
                err ? reject(err) : resolve(result);        
            })    
        })
    }
}

module.exports = new IndexModel()
