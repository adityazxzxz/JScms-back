var { mongoose } = require('../config/mongoose')
var { User } = require('../models/Users')  
const accessControl = require('accesscontrol')
let grantList = [
    { role: 'admin', resource: 'user', action: 'create:any', attributes: '*, !views' },
    { role: 'admin', resource: 'user', action: 'read:any', attributes: '*' },
    { role: 'admin', resource: 'user', action: 'update:any', attributes: '*, !views' },
    { role: 'admin', resource: 'user', action: 'delete:any', attributes: '*' },

    { role: 'admin', resource: 'role', action: 'create:any', attributes: '*, !views' },
    { role: 'admin', resource: 'role', action: 'read:any', attributes: '*' },
    { role: 'admin', resource: 'role', action: 'update:any', attributes: '*, !views' },
    { role: 'admin', resource: 'role', action: 'delete:any', attributes: '*' },
 
    { role: 'user', resource: 'image', action: 'create:any', attributes: '*, !rating, !views' },
    { role: 'user', resource: 'image', action: 'read:any', attributes: '*' },
    { role: 'user', resource: 'image', action: 'update:any', attributes: '*, !rating, !views' },
    { role: 'user', resource: 'image', action: 'delete:any', attributes: '*' },

    { role: 'editor', resource: 'article', action: 'create:any', attributes: '*, !rating, !views' },
    { role: 'editor', resource: 'article', action: 'read:any', attributes: '*' },
    { role: 'editor', resource: 'article', action: 'update:any', attributes: '*, !rating, !views' },
    { role: 'editor', resource: 'article', action: 'delete:any', attributes: '*' }
];

const ac = new accessControl(grantList);
ac.grant('admin').extend('editor');
ac.grant('admin').extend('user');

module.exports = {
    create:(...modul) => {
        return (req,res,next) => {
            try {
                var permit = ac.can(req.decoded.role).createAny(modul[0]);
                if(permit.granted){
                    next()
                }else{
                    res.status(403).send('forbidden')
                }
            } catch (error) {
                res.status(500).send('server error')
            }
            
        }
    },
    read:(...modul) => {
        return (req,res,next) => {
            try {
                var permit = ac.can(req.decoded.role).readAny(modul[0]);
                if(permit.granted){
                    next()
                }else{
                    res.status(403).send('forbidden')
                }
            } catch (error) {
                res.status(500).send('server error')
            }
            
        }
    }
}
