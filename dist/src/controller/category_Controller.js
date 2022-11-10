"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category_Controller = void 0;
const categoryService_1 = require("../service/categoryService");
class Category_Controller {
    constructor() {
        this.createPageCategory = (req, res) => {
            res.render('createCategory');
        };
        this.createCategory = (req, res) => {
            let file = req.files;
            if (file) {
                let image = file.image;
                image.mv('./public/uploads/' + image.name);
                let newCategory = req.body;
                newCategory.image = `uploads/${image.name}`;
                this.categoryService.categoryRepo.save(newCategory);
                res.redirect('/product');
            }
        };
        this.categoryService = new categoryService_1.CategoryService();
    }
}
exports.Category_Controller = Category_Controller;
exports.default = new Category_Controller();
//# sourceMappingURL=category_Controller.js.map