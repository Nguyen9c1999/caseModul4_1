"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_Service = void 0;
const data_source_1 = require("../data_source");
const product_1 = require("../model/product");
class Product_Service {
    constructor() {
        this.findAll = async (req, res) => {
            return await this.productRepo.find();
        };
        this.createProduct = async (product) => {
            await this.productRepo.save(product);
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            console.log('succ');
            this.productRepo = await connection.getRepository(product_1.Product);
        });
    }
}
exports.Product_Service = Product_Service;
//# sourceMappingURL=product_Service.js.map