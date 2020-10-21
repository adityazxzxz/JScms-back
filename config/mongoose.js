const mongoose = require('mongoose')
var dbuser = process.env.MONGO_USER;
var dbpassword = process.env.MONGO_PASSWORD;
var dbhost = process.env.MONGO_HOST;
var dbport = process.env.MONGO_PORT;
var dbname = process.env.MONGO_COLLECTION_NAME;
var dbauth = process.env.MONGO_AUTH_SOURCE;
mongoose.Promise = global.Promise;
//const uri = 'mongodb://root:*aqn123#@202.159.121.198:8383/mydb?authSource=admin';
const uri = `mongodb://${dbuser}:${dbpassword}@${dbhost}:${dbport}/${dbname}?authSource=${dbauth}`;
mongoose.connect(uri, { poolSize: 4 ,useNewUrlParser: true, useUnifiedTopology: true});

module.exports = { mongoose }



// const Cat = mongoose.model('Cat',{name:String})

// const kitty = new Cat({name:'Tiger'})
// kitty.save().then(() => console.log('meow'))