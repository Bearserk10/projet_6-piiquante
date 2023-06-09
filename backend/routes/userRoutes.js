const express = require('express');
const router = express.Router();
const password =require("../middleware/password");


const userCtrl = require('../controllers/userControllers');


router.post('/signup',password, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
