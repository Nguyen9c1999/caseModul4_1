import {AppDataSource} from "../data_source";
import {Category} from "../entity/category";

export class CategoryService{
    categoryRepo:any
    constructor() {
        this.categoryRepo = AppDataSource.getRepository(Category)
    }
    findAll=()=>{
        return this.categoryRepo.find()
    }
}

