const express = require('express')

const router = express.Router()

const songControl = require('../controllers/songController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')

// seed 
router.get('/seed', songControl.seed)

// index
router.get('/', songControl.index)

// show
router.get('/:id', songControl.show)

// new
router.get('/new', songControl.new)

// create
router.post('/', songControl.create)

module.exports = router