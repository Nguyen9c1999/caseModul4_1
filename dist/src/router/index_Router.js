"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index_Router = void 0;
const express_1 = __importDefault(require("express"));
const product_Router_1 = require("./product_Router");
const category_Router_1 = require("./category_Router");
exports.index_Router = (0, express_1.default)();
exports.index_Router.use(product_Router_1.product_Router);
exports.index_Router.use(category_Router_1.category_Router);
//# sourceMappingURL=index_Router.js.map