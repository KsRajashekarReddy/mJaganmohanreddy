const { type } = require('express/lib/response')
const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const newdeveloperSchema = new mongoose.Schema( {

  
		name:String,
		percentage:Number,
        gender:["male","female","others"],
        newdeveloperSchema : {
            type:String,
            ref:'batch'
        },
      
  
}, { timestamps: true })

module.exports = mongoose.model('developer',newdeveloperSchema)
