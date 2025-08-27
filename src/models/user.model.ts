import mongoose from 'mongoose'
const {Schema} = mongoose

const UserSchema = new Schema({
    id: Number,
    email: String,
    username:String,
    password_has: String,
    is_verified: Boolean,
    refresh_token: String,
    created_at: {Date, default: Date.now},
    updated_at: {Date, default:Date.now}
})

export default mongoose.model('User', UserSchema)