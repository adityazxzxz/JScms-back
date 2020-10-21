
function Admin(){
    this.login = (req,res,next) => {
        res.send('admin api')
    }

    this.logout = (req,res,next) => {
        res.send('logout admin api')
    }
}

module.exports = new Admin()