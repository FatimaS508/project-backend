const goal = require('../models/goals');
const goals = require('../models/goals')

async function createGoal(req,res){
    try{
    const {
      title,
      description,
      targetDate,
      priority,
      status,
      targetAchievement,
      unit
    } = req.body;

    console.log(req.body)

    const tracking = !targetAchievement ? null : {
        unit,
        targetAchievement
      }
    const createdGoal = await goals.create({
      title,
      description,
      priority,
      status,
      tracking,
      owner: req.user._id
    });
        res.status(201).json(createdGoal)
    }catch(err){
        console.log(err)
    }
}

async function getGoals(req,res){
    try{
        const allGoals = await goals.find()

        res.status(200).json(allGoals)

    }catch(err){
        console.log(err)
    }
}

async function getGoalById(req,res){
    try{
        const onegoal = await goals.findById(req.params.id, req.body)
        res.status(200).json(onegoal)

    }catch(err){console.log(err)}
}

async function UpdateGoal(req,res){
    try{
        
        const findGoal = await goals.findById(req.params.id)


        console.log(findGoal);
        console.log(findGoal.user);
        console.log(req.user._id);

        if(!findGoal.owner.equals(req.user._id)){
            return res.status(403).json({message: "You are not authorized to modify this goal"})
        }
        console.log(req.body)
        const updatedGoal = await goals.findByIdAndUpdate(req.params.id, req.body)

        res.json(updatedGoal)

    }catch(err){console.log(err)}
}

async function deleteGoal(req,res){
    try{
        const findGoal= await goals.findById(req.params.id)

        if(!findGoal.owner.equals(req.user._id)){
            res.status(403).json({message: "You are not authorized to delete this goal"})
        }


        const deletedGoal= await goals.findByIdAndDelete(req.params.id)

        res.json(deletedGoal)
    }catch(err){console.log(err)}
}


module.exports={createGoal, getGoals, getGoalById, UpdateGoal, deleteGoal}