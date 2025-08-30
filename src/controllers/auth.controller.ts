import { Request,Response } from "express"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import User from "../models/user.model"
const register = async (req: Request, res: Response) => {
    const randomNumber = Math.floor(Math.random() * 1000000); // safer as integer
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    const refreshToken = jwt.sign(
        { email, username },
        process.env.SALT_KEY!,
        { expiresIn: "7d" }
    );

    try {
        await mongoose.connect(process.env.MONGOOSE_URL!);

        const user = await User.create({
            _id: randomNumber,
            email,
            username,
            password_hash: password, // ✅ match with your schema field name
            is_verified: false,
            refresh_token: refreshToken
        });

        res.status(200).json({
            msg: "User registered successfully",
            refreshToken
        });
    } catch (err) {
        console.error("Error: " + err);
        res.status(500).json({ msg: "Server error" });
    }
};

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            msg: "email or password field empty"
        });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: "User not found"
            });
        }

        const userEmail = user.email;
        const userPass = user.password_hash; // ✅ make sure schema uses this field

        if (userEmail === email && userPass === password) {
            const jwtToken = jwt.sign(
                { email: userEmail },
                process.env.SALT_KEY!,
                { expiresIn: "7d" }
            );

            return res.status(200).json({
                msg: "User logged in successfully",
                jwtToken
            });
        } else {
            return res.status(400).json({
                msg: "Invalid credentials"
            });
        }
    } catch (err) {
        console.error("Error: " + err);
        return res.status(500).json({ msg: "Server error" });
    }
};

const refresh = async (req:Request,res:Response)=>{

}

const logout = async (req:Request,res:Response)=>{

}

const forgotPassword = async (req:Request,res:Response)=>{

}

const resetPassword = async (req:Request,res:Response)=>{

}

const changePassword = async (req:Request,res:Response)=>{

}

export {refresh,register,login,logout,forgotPassword,resetPassword,changePassword}