"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const UserSchema = new Schema({
    _id: Number,
    email: String,
    username: String,
    password_hash: String, // typo: changed from password_has
    is_verified: { type: Boolean, default: false },
    refresh_token: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
exports.default = mongoose_1.default.model('User', UserSchema);
