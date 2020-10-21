var { mongoose } = require('../config/mongoose')
var { User } = require('../models/Users')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

function UserController() {
    this.login = (req, res, next) => {
        try {
            let {
                email,
                password
            } = req.body


            User.findOne({ email }, (err, arr) => {
                if (arr) {
                    let hash = arr.password;
                    let check = bcrypt.compareSync(password, hash)
                    if (check) {
                        const { id, role } = arr;
                        jwt.sign({ id, role }, 'mycms123#', (err, token) => {
                            res.status(200).json({
                                access_token: token
                            })
                        })
                    } else {
                        res.status(400).send('email or password not found')
                    }

                } else {
                    res.status(400).send('email or password not found')
                }
            })
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }

    this.logout = (req, res, next) => {
        res.send('logout api')
    }

    this.create = (req, res, next) => {
        try {
            let { email, password, role } = req.body;
            User.findOne({ email }, (err, data) => {
                if (data) {
                    return res.status(400).json({ message: 'Email already exist' });
                } else {
                    let hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
                    var newUser = new User({
                        email,
                        password: hash,
                        role
                    });
                    newUser.save().then((doc) => {
                        return res.status(200).json({ message: 'Register Success' });
                    })
                }
            })

        } catch (error) {

        }
    }
}

module.exports = new UserController()