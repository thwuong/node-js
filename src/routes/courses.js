const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/CourseController')
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

router.get('/create',courseController.create)
router.post('/store',urlencodedParser,courseController.store)
router.get('/:id/edit',courseController.edit)
router.post('/handle-form-actions',urlencodedParser,courseController.handleFormActions)
router.put('/:id',urlencodedParser,courseController.update)
router.patch('/:id/restore',courseController.restore)
router.delete('/:id',urlencodedParser,courseController.delete)
router.delete('/:id/force',courseController.force)
router.get('/:slug',courseController.show)


module.exports = router