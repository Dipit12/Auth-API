"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv").config();
function authMiddleware(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader)
        return res.status(401).json({ error: "No token provided" });
    const token = authHeader.split(" ")[1]; // removes "Bearer"
    if (!token)
        return res.status(401).json({ error: "Invalid token format" });
    // verify token
    jsonwebtoken_1.default.verify(token, process.env.SALT_KEY, (err, decoded) => {
        if (err)
            return res.status(403).json({ error: "Token invalid" });
        console.log("decoded");
        next();
    });
}
