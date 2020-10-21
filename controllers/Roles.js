var { mongoose } = require('../config/mongoose')
var { Role } = require('../models/Roles')
var { Resource } = require('../models/Resource')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Mongoose } = require('mongoose');

function RoleController() {
    this.create = (req, res, next) => {
        try {
            var newRole = new Role({
                _id:new mongoose.Types.ObjectId,
                name:"super",
                resource:{
                    _id:new mongoose.Types.ObjectId,
                    module:'role',
                    action:['readany','createany']
                }
            });
            newRole.save().then((doc) => {
                res.status(200).send('oke')
            })
        } catch (error) {
            console.log(error)
        }
    }

    this.read = (req,res,next) => {
        Resource.findOne({module:'article'}).populate('role_id').exec((err,resource) => {
            if (err) return handleError(err);
            console.log('The author is %s', resource.role_id);
        })
        
        return res.send('halo')
    }

    this.index = (req,res,next) => {
        Role.find().then((role) => {
            res.status(200).json(role)
        }).catch(err => res.status(500).send('something wrong'))
    }
}

module.exports = new RoleController()