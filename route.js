const auth = require('./middleware/auth')
const permit = require('./middleware/permissions')
const userController = require('./controllers/Users')
const roleController = require('./controllers/Roles')
const admin = require('./controllers/Admin')
const configure = (app) => {
	app.route('/login').post((req,res,next) => {
		console.log(req.body)
	})
    //app.route('/login').post(userController.login)
    app.route('/user/create').post(auth,permit.create("user"),userController.create)
    app.route('/role').get(auth,permit.read("role"),roleController.index)
    app.route('/role/create').post(auth,permit.create("role"),roleController.create)
    //app.route('/user/create').post(userController.create)
    //app.route('/users').get([login],users.list)
    //app.route('/users/create').post([login],users.store)
    //app.route('/users/edit').post([login],users.update)
    //app.route('/users/delete').post([login],users.delete)
}

module.exports = { configure }