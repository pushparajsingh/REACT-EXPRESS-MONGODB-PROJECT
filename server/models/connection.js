//express-mongodb connectivity file

var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/reactbatch89new"
mongoose.connect(url)
console.log("Successfully connected to mongodb database....")