const  mongoose  = require("mongoose");

const StaffMemberSchema =  new mongoose.Schema({
    fullName:{type:String,required:true},
    gender:{type:String,required:true},
    birthDay:{type:String,required:true},
    roleid:{type:String,required:true},
    address:{type:String,required:true},
    mobile:{type:Number,required:true},
    email:{type:String,required:true},
    image:{type:String,required:true},
})

const staffmember = mongoose.model("staffmemberdatas",StaffMemberSchema);
module.exports = staffmember;