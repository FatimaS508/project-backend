const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema(
  {
    domainName: {
    type: String,
    required: true,
    trim: true
    },

    icon: {
    type: String,
    required: true
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
