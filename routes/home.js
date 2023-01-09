const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') //follow this to ../controllers/home, this is bringing in (importing) the getIndex method from there

router.get('/', homeController.getIndex) //get / router is handing the get request off to the homeController.getIndex (and above says to require ../controllers/home for the homeController). this is actually a call bc homeController is require(../controllers/home) which is a call. ** not sure about this still confused why we don't have to have getIndex() somewhere

module.exports = router //exports this router, which is the above line

