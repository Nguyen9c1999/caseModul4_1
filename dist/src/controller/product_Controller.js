"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_Controller = void 0;
const productService_1 = require("../service/productService");
const categoryService_1 = require("../service/categoryService");
class Product_Controller {
    constructor() {
        this.showProduct = async (req, res) => {
            const products = await this.productService.findAll();
            const categorys = await this.categorySerVice.findAll();
            res.render('index', { products: products, categories: categorys });
        };
        this.pageCreate = async (req, res) => {
            const categorys = await this.categorySerVice.findAll();
            res.render('create', { categorys: categorys });
        };
        this.createProduct = async (req, res) => {
            let file = req.files;
            if (file) {
                let image = file.image;
                image.mv('./public/uploads/' + image.name);
                let newProduct = req.body;
                newProduct.image = `uploads/${image.name}`;
                await this.productService.saveProduct(newProduct);
                res.redirect('/product');
            }
        };
        this.editPage = async (req, res) => {
            let product = await this.productService.productRepo.findOneById(+req.params.id);
            const categorys = await this.categorySerVice.findAll();
            res.render('edit', { product: product, categorys: categorys });
        };
        this.editProduct = async (req, res) => {
            let file = req.files;
            if (file) {
                let image = file.image;
                image.mv('./public/uploads/' + image.name);
                let newProduct = req.body;
                newProduct.image = `uploads/${image.name}`;
                await this.productService.updateProduct(newProduct, +req.params.id);
                res.redirect('/product');
            }
        };
        this.deleteProduct = async (req, res) => {
            await this.productService.productRepo.delete(+req.params.id);
            res.redirect('/product');
        };
        this.searchProduct = async (req, res) => {
            console.log(req.body.categoryId);
            let products;
            if (req.body.categoryId != null) {
                products = await this.productService.searchProductByIdCategory(req.body.categoryId);
            }
            else {
                products = await this.productService.searchProduct(req.body.name);
            }
            const categorys = await this.categorySerVice.findAll();
            res.render('index', { products: products, categories: categorys });
        };
        this.productService = new productService_1.Product_Service();
        this.categorySerVice = new categoryService_1.CategoryService();
    }
}
exports.Product_Controller = Product_Controller;
exports.default = new Product_Controller();
//# sourceMappingURL=product_Controller.js.map