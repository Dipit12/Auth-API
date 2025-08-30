"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.resetPassword = exports.forgotPassword = exports.logout = exports.login = exports.register = exports.refresh = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = __importDefault(require("../models/user.model"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const randomNumber = Math.floor(Math.random() * 1000000); // safer as integer
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        return res.status(400).json({ msg: "All fields are required" });
    }
    const refreshToken = jsonwebtoken_1.default.sign({ email, username }, process.env.SALT_KEY, { expiresIn: "7d" });
    try {
        yield mongoose_1.default.connect(process.env.MONGOOSE_URL);
        const user = yield user_model_1.default.create({
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
    }
    catch (err) {
        console.error("Error: " + err);
        res.status(500).json({ msg: "Server error" });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            msg: "email or password field empty"
        });
    }
    try {
        const user = yield user_model_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: "User not found"
            });
        }
        const userEmail = user.email;
        const userPass = user.password_hash; // ✅ make sure schema uses this field
        if (userEmail === email && userPass === password) {
            const jwtToken = jsonwebtoken_1.default.sign({ email: userEmail }, process.env.SALT_KEY, { expiresIn: "7d" });
            return res.status(200).json({
                msg: "User logged in successfully",
                jwtToken
            });
        }
        else {
            return res.status(400).json({
                msg: "Invalid credentials"
            });
        }
    }
    catch (err) {
        console.error("Error: " + err);
        return res.status(500).json({ msg: "Server error" });
    }
});
exports.login = login;
const refresh = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.refresh = refresh;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.logout = logout;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.forgotPassword = forgotPassword;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.resetPassword = resetPassword;
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.changePassword = changePassword;
