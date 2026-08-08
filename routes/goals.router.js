const router= require('express').Router()
const verifyToken = require('../middleware/verifyToken')
const goalController = require('../controllers/goals.controller')

router.post('/',verifyToken, goalController.createGoal)
router.get('/',verifyToken, goalController.getGoals)
router.get('/:id', verifyToken, goalController.getGoalById)
router.put('/:id', verifyToken, goalController.UpdateGoal)
router.delete('/:id', verifyToken, goalController.deleteGoal)

module.exports= router