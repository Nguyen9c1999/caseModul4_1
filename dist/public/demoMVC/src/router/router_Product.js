"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router_Product = void 0;
const express_1 = __importDefault(require("express"));
const product_Controller_1 = __importDefault(require("../controller/product_Controller"));
exports.router_Product = (0, express_1.default)();
exports.router_Product.get('/product', product_Controller_1.default.showProduct);
exports.router_Product.get('/create', product_Controller_1.default.createPage);
exports.router_Product.post('/create', product_Controller_1.default.createProduct);
//# sourceMappingURL=router_Product.js.map