"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_routes_1 = __importDefault(require("./routes/main.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
require('dotenv').config();
const connectToDB_1 = require("./utils/connectToDB");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use(auth_routes_1.default);
app.use(main_routes_1.default);
app.use(user_routes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    (0, connectToDB_1.connectToDatabase)();
});
