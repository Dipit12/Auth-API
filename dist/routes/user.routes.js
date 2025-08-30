"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const verifyToken_1 = require("../middleware/verifyToken");
const router = express_1.default.Router();
router.get("/api/user/me", verifyToken_1.authMiddleware, user_controller_1.getUserData);
exports.default = router;
