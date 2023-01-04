import axios from 'axios';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import User from '../../models/User';
import dbConnect from '../../utils/db';
import cookie from "cookie";


export default async function handler(req, res) {
   const { method } = req;

   await dbConnect();
    if(method === "POST") {
      const {email} = req.body;
    try{
       const user = await User.findOne({email: email});
       if(!user){
        return res.status(404).json({message: "User not found"});
       }
       const isMatched = bcrypt.compareSync(req.body.password, user.password);
       if(!isMatched){
        return res.status(400).json({message: "Wrong password"});
       }
       const token = jwt.sign({id: user._id}, process.env.SECRET)
       const {password, ...others} = user._doc;

       res.setHeader(
        "Set-Cookie",
        cookie.serialize("xyzacademy", token, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      )
        res.status(200).json(others);
     }catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
      }
   }
}