import mongoose from 'mongoose'



const CourseSchema = new mongoose.Schema({
    title:{
        type:String,
        maxLength: 50,
        required:true
    },
    desc:{
        type:String,
        maxLength: 200,
        required:true
    },
    imgURL:{
        type:String,
    },
    duration:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    instructors: {
        type: [String],
    },
    enrolled: {
        type: [String],
        default: []
    }
   
},{timestamps:true})

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);