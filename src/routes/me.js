const express = require('express')
const router = express.Router()
const meController = require('../app/controllers/MeController')
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

router.get('/stored/courses',meController.storedCourses);
router.get('/trash/courses',meController.trashCourses);


module.exports = router