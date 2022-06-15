"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBusinessList = void 0;
const business_1 = __importDefault(require("../Models/business"));
const Util_1 = require("../../Util");
const Routes_1 = __importDefault(require("../Routes"));
function DisplayBusinessList(req, res, next) {
    business_1.default.find(function (err, businessesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business List', page: 'business-list', businesses: businessesCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayBusinessList = DisplayBusinessList;
Routes_1.default.get('/add', (req, res, next) => {
    res.render('add', { title: 'Add Business List', page: 'business-list', displayName: (0, Util_1.UserDisplayName)(req) });
});
Routes_1.default.get('/add', (req, res, next) => {
    let newBusinessList = BusinessList({
        "name": req.body.name,
        "number": req.body.number,
        "address": req.body.address
    });
    BusinessList.create(newBusinessList, (err, BusinessList) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('business-list');
        }
    });
});
Routes_1.default.get('/edit:id', (req, res, next) => {
    let id = req.params.id;
    BusinessList.findById(id, (err, businessListToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('edit', { title: 'Edit Business List', businessList: businessListToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
        }
    });
});
/;
;
//# sourceMappingURL=business-list.js.map