"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBusinessList = void 0;
const business_1 = __importDefault(require("../Models/business"));
function DisplayBusinessList(req, res, next) {
    business_1.default.find(function (err, businessesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business List', page: 'business-list', businesses: businessesCollection });
    });
}
exports.DisplayBusinessList = DisplayBusinessList;
//# sourceMappingURL=business-list.js.map