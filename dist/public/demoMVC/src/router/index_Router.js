"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index_Router = void 0;
const express_1 = __importDefault(require("express"));
const router_Product_1 = require("./router_Product");
exports.index_Router = (0, express_1.default)();
exports.index_Router.use('', router_Product_1.router_Product);
//# sourceMappingURL=index_Router.js.map