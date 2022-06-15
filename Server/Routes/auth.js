"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../controllers/auth");
router.get('/login', auth_1.DisplayLoginPage);
router.get('/register', auth_1.DisplayRegisterPage);
router.post('/login', auth_1.ProcessLoginPage);
router.post('/register', auth_1.ProcessRegisterPage);
router.get('/logout', auth_1.ProcessLogoutPage);
router.get('/add', auth_1.DisplayAddPage);
router.get('/edit', auth_1.DisplayEditPage);
router.post('/add', auth_1.DisplayAddPage);
router.post('/edit', auth_1.DisplayEditPage);
exports.default = router;
//# sourceMappingURL=auth.js.map