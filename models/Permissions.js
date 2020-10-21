const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var permission_schema = new Schema({
    name:{
        type:String
    }
})

var Permission = mongoose.model('Permissions',permission_schema)
module.exports = { Permission }