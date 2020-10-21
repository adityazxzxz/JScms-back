const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var role_schema = new Schema({
    name:String,
    resource:[new Schema({
        module:String,
        action:[String]
    })]
})

var Role = mongoose.model('Roles',role_schema)
module.exports = { Role }