"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const data_source_1 = require("../data_source");
const category_1 = require("../entity/category");
class CategoryService {
    constructor() {
        this.findAll = () => {
            return this.categoryRepo.find();
        };
        this.categoryRepo = data_source_1.AppDataSource.getRepository(category_1.Category);
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=categoryService.js.map