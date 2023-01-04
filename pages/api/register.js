import axios from 'axios';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import User from '../../models/User';
import dbConnect from '../../utils/db';


export default async function handler(req, res) {
   const { method } = req;

   await dbConnect();
    if(method === "POST") {
      const {firstname, surname, email, password, phone} = req.body;
      const existinguser = await User.findOne({email: email})
    try{
       if(existinguser){
         return res.status(400).json({
           error: "User already exists"})
       }else{
         const salt = bcrypt.genSaltSync(10);
         const hashedpassword = bcrypt.hashSync(password, salt);
         const user = new User({
           ...req.body, password: hashedpassword
         });
         await user.save();
         res.status(201).json("user has been created successfully")
       }
     }catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
      }
   }
}