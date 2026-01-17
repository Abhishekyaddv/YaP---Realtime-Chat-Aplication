import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { ENV } from '../lib/env.js';


export const protectRoute = async (req, res, next) =>{
  try { 
    // check for the token if it exists or not
    const token = req.cookies.jwt
    if(!token) return res.status(401).json({message: "Unauthorized - No token provided"})
      
      // here we will check if its valid or not 
      const decoded = jwt.verify(token, ENV.JWT_SECRET)
      if(!decoded) return res.status(401).json({message: "Unauthorized - Invalid token provided"})

      // Here we checking if User Exists in database or not
      const user = await User.findById(decoded.userId).select("-password")
      if(!user) return res.status(404).json({message: "User Not Found"})

      // if user exists we will call the next function
      req.user = user // here we will this user and pass it to the next function
      next();
    
  } catch (error) {
    console.log("Error in protectRoute Middleware");
     res.status(500).json({message: "Internal Server Error"})
    
  }
}