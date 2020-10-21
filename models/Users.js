const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var user_schema = new Schema({
    email:String,
    password:String,
    google_id:String,
    created_at:String,
    role:String
})


var User = mongoose.model('Users',user_schema)
module.exports = { User }