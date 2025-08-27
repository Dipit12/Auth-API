import {Request,Response} from 'express'

type ResponseFromDB = {
    id:String,
    userName:String,
    email:String,
    created_at:Date,
    updated_at:Date,
    is_verified:Boolean
}
const getUserData = async (req:Request,res:Response) =>{
    // get user data from mongoose
    res.status(200).json({
        msg:"HI this is user data"
    })
}

export {getUserData}