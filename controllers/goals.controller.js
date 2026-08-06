const goals = require('../models/goals')

async function createGoal(req,res){
    try{
        const createdGoal = await goals.create(
            {title, description, targetDate, priority, status}= req.body
        )
        res.status(201).json(createdGoal)
    }catch(err){
        console.log(err)
    }
}


module.exports={createGoal}