const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var resource_schema = new Schema({
    _id:mongoose.Types.ObjectId,
    module:String,
    action:String
})



var Resource = mongoose.model('Resource',resource_schema)
module.exports = { Resource }