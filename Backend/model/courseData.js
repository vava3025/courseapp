const mongoose=require('mongoose');
const courseSchema=mongoose.Schema({
    courseId:{
        type:String,
        required:true
    },
    courseName:{
        type:String,
        required:true
    },
    courseCategory:{
        type:String,
        required:true
    },
    courseDes:{
        type:String,
        required:true},
    courseImage:{
        type:String,
        required:true},
    courseFee:{
        type:Number,
        required:true}
})
const courseData=mongoose.model('course',courseSchema);
module.exports=courseData;