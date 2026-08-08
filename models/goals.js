const mongoose = require('mongoose')


const goalsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    targetDate:{
        type: Date
    },
    priority:{
        type: String,
        enum:[ "low, medium, high"]
    },
    status:{
        type: String,
        enum: ["not started, in-progress, finished"]
    },
    domain:{type:mongoose.Schema.Types.ObjectId,
        ref: "Domain",
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
},{timestamps:true})

const goal = mongoose.model('goal', goalsSchema)

module.exports= goal