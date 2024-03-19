const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,'inventory type require'],
        enum:['in','out'],
    },
    
    bloodGroup:
    {
        type:String,
        required:[true,'blood group is required'],
        enum:['O+','O-','AB+','A+','A-','B+','B-'],
    },
    quantity:{
        type:Number,
        required:[true,'blood quantity is require'],
    },
    organisation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'user is require'],
    },
    
   hospital:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:function(){
        return this.inventoryType==="out";
    },

   },
   donar:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:function(){
        return this.inventoryType==="in";
    },

   },
    
},{timestamps:true});

module.exports = mongoose.model("Inventory",inventorySchema);
