const  mongoose  = require("mongoose");

const WorkoutsSchema =  new mongoose.Schema({
    name:{type:String,required:true},
    date:{type:String,required:true},
    day1:{type:String,required:true},
    day2:{type:String,required:true},
    day3:{type:String,required:true},
    day4:{type:String,required:true},
    day5:{type:String,required:true},
    day6:{type:String,required:true},
    day7:{type:String,required:true}
})

const workouts = mongoose.model("workouts",WorkoutsSchema);
module.exports = workouts;