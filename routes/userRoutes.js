const express = require('express');
const { getallUsers, registerController, loginController } = require('../controllers/userController');

//router object
const router = express.Router()

//GET ALL USERS || GET
router.get('/all-users', getallUsers);


// CREATE USER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login",loginController)

module.exports = router;