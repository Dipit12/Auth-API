import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema({
    _id: Number,
    email: String,
    username: String,
    password_hash: String,   // typo: changed from password_has
    is_verified: { type: Boolean, default: false },
    refresh_token: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export default mongoose.model('User', UserSchema)
