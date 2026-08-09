const mongoose = require('mongoose')

const trackingSchema = new mongoose.Schema({ //nested schema to tell how to meausure the goal completion.
  type: {
    type: String,
    enum: ["boolean", "number"],
    // required: true
  },

  currentAchievement: {
    type: Number,
    default: 0
  },

  targetAchievement: {
    type: Number
  },

  unit: { //whats represent? BD? KM?
    type: String
  },

  completed: { //for easy/simple goals
    type: Boolean,
    default: false
  }
});

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
    status:{ //to tell in what stage am i in
        type: String,
        enum: ["Not Started", "In-progress", "Finished"],
        default: "Not Started"
    },
    progress: { //calculate the progress of the completion in %
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    domain:{type:mongoose.Schema.Types.ObjectId,
        ref: "Domain",
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    tracking: trackingSchema
},{timestamps:true})

const goal = mongoose.model('goal', goalsSchema)

module.exports= goal