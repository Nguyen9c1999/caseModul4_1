"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.category_Router = void 0;
const express_1 = __importDefault(require("express"));
const category_Controller_1 = __importDefault(require("../controller/category_Controller"));
exports.category_Router = (0, express_1.default)();
exports.category_Router.get('/category/create', category_Controller_1.default.createPageCategory);
exports.category_Router.post('/category/create', category_Controller_1.default.createCategory);
//# sourceMappingURL=category_Router.js.map