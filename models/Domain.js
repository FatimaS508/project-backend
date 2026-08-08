const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema(
  {
    domainName: {
    type: String,
    required: true,
    trim: true
    },
    description:{
      type: String
    },

    icon: {
    type: String,
    
    },

    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  },
  { timestamps: true },
);



const Domain = mongoose.model("Domain", domainSchema);

module.exports = Domain;
