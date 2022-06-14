"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const business_list_1 = require("../controllers/business-list");
router.get('/business-list', business_list_1.DisplayBusinessList);
exports.default = router;
//# sourceMappingURL=business-list.js.map