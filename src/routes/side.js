const express = require('express')
const router = express.Router()
const SideController = require('../app/controllers/SideController')

router.get('/search',SideController.search)
router.get('/',SideController.index)



module.exports = router