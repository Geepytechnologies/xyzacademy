import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        firstname : {
            type: String, 
            required: true
        },
        surname : {
            type: String, 
            required: true
        },
        email : {
            type: String,
            required: true, 
            unique: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        password : {
            type: String, 
            required: true
        },
        courses: {
            type: [String],
            default: []
        }
    },
    {timestamps: true}
);

export default mongoose.models.User || mongoose.model("User", UserSchema);