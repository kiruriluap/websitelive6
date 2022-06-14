"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const BusinessSchema = new Schema({
    Name: String,
    Number: String,
    Address: String
}, {
    collection: "businesses"
});
const Model = mongoose_1.default.model("Businesses", BusinessSchema);
exports.default = Model;
//# sourceMappingURL=business.js.map