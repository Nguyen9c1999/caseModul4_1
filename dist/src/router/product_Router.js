"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_Router = void 0;
const express_1 = __importDefault(require("express"));
const product_Controller_1 = __importDefault(require("../controller/product_Controller"));
exports.product_Router = (0, express_1.default)();
exports.product_Router.get('/product', product_Controller_1.default.showProduct);
exports.product_Router.get('/create', product_Controller_1.default.pageCreate);
exports.product_Router.post('/create', product_Controller_1.default.createProduct);
exports.product_Router.get('/edit/:id', product_Controller_1.default.editPage);
exports.product_Router.post('/edit/:id', product_Controller_1.default.editProduct);
exports.product_Router.get('/delete/:id', product_Controller_1.default.deleteProduct);
exports.product_Router.post('/product', product_Controller_1.default.searchProduct);
//# sourceMappingURL=product_Router.js.map