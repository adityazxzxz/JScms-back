const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const logger = require('morgan')
const path = require('path')
const fs = require('fs')
var accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});
require('dotenv').config()


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('combined',{ stream:accessLogStream }))
app.use(logger('dev'))
app.use(cors())

// console.log('1hr',Math.floor(Date.now() / 1000) + (60 * 60))
// console.log('now',Math.floor(Date.now() / 1000))

const router = require('./route')
router.configure(app);


app.listen(3001, () => {
    console.log('server run port 3000')
})
