"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const router = express_1.default.Router();
router.post("/api/auth/register", auth_controller_1.register);
router.post("/api/auth/login", auth_controller_1.login);
router.post("/api/auth/refresh", auth_controller_1.refresh);
router.post("/api/auth/logout", auth_controller_1.logout);
router.post("/api/auth/forgot-password", auth_controller_1.forgotPassword);
router.post("/api/auth/reset-password", auth_controller_1.resetPassword);
router.post("/api/auth/change-password", auth_controller_1.changePassword);
// email verification route
// router.get("/api/auth/verify-email/:token")
exports.default = router;
