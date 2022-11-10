"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_Service_1 = require("../service/product_Service");
class Product_Controller {
    constructor() {
        this.showProduct = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            res.render('index', {
                products: products
            });
        };
        this.createPage = async (req, res) => {
            res.render('product/create');
        };
        this.createProduct = async (req, res) => {
            let file = req.files;
            if (file) {
                let image = file.image;
                image.mv('./public/uploads/' + image.name);
                let newProduct = req.body;
                newProduct.image = `uploads/${image.name}`;
                await this.productService.createProduct(newProduct);
                res.redirect('/product');
            }
        };
        this.productService = new product_Service_1.Product_Service();
    }
}
exports.default = new Product_Controller();
//# sourceMappingURL=product_Controller.js.map