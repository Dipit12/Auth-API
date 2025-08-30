import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express";

require("dotenv").config();

function authMiddleware(req:Request, res:Response, next:NextFunction) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.status(401).json({ error: "No token provided" });
  
    const token = authHeader.split(" ")[1]; // removes "Bearer"
    if (!token) return res.status(401).json({ error: "Invalid token format" });
  
    // verify token
    jwt.verify(token, process.env.SALT_KEY!, (err:any, decoded:any) => {
      if (err) return res.status(403).json({ error: "Token invalid" });
      console.log("decoded")
      next();
    });
  }
  

export {authMiddleware}