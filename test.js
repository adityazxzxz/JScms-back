"use strict";

const { mongoose } = require('./config/mongoose')
const { Role } = require('./models/Roles')

var newrole = new Role({
  name:'admin',
  resource:[{
    module:'artikel',
    action:['createAny','readAny','updateAny','deleteAny']
  },{
    module:'bidding',
    action:['createAny','readAny','updateAny','deleteAny']
  }]
})

//newrole.save()

Role.find().then((doc) => {
  var arr = []
  doc.forEach((role) => {
    role.resource.forEach((resource) => {
      resource.action.forEach((action) => {
        arr.push({
          role:role.name,
          resource:resource.module,
          action,
          attribute:'*'
        })
      })
    })
  })
  console.log(arr)
})

