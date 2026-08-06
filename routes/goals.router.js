const router= require('express').Router()

const goalController = require('../controllers/goals.controller')

router.post('/', goalController.createGoal)


module.exports= router