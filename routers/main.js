const express= require('express');
const router= express.Router();
const mainController= require('../controllers/userController');

router.get('/', mainController.home);

router.get('/', mainController.about);

module.exports= router;