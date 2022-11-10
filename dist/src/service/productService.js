"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_Service = void 0;
const data_source_1 = require("../data_source");
const product_1 = require("../entity/product");
class Product_Service {
    constructor() {
        this.findAll = async () => {
            return await this.productRepo.find();
        };
        this.saveProduct = async (product) => {
            await this.productRepo.save(product);
        };
        this.updateProduct = async (product, id) => {
            await this.productRepo.update({ idProduct: id }, product);
        };
        this.searchProduct = async (name) => {
            return await this.productRepo.query(`select * from product where name like '%${name}%'`);
        };
        this.searchProductByIdCategory = async (idCategory) => {
            return await this.productRepo.query(`select * from product where idCategory = ${idCategory}`);
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            console.log('succ');
            this.productRepo = await connection.getRepository(product_1.Product);
        });
    }
}
exports.Product_Service = Product_Service;
//# sourceMappingURL=productService.js.map