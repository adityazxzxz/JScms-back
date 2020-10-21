const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    try {
        var token = req.get('Authorization')
        jwt.verify(token,'mycms123#',(err, decoded) => {
            if(err){
                res.status(401).json('Invalid token')
            }else{
                req.decoded = decoded
                next()
            }
        })
    } catch (error) {
        res.status(400).json('Undefine request')
    }
}
