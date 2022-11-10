import {CategoryService} from "../service/categoryService";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload"
export class Category_Controller {
    categoryService : CategoryService
    constructor() {
        this.categoryService = new CategoryService()
    }
    createPageCategory = (req:Request, res:Response)=>{
       res.render('createCategory')
    }
    createCategory = (req:Request, res:Response)=>{
        let file = req.files
        if(file){
            let image = file.image as UploadedFile
            image.mv('./public/uploads/'+image.name)
            let newCategory = req.body
            newCategory.image=`uploads/${image.name}`
            this.categoryService.categoryRepo.save(newCategory)
            res.redirect('/product')

        }
    }

}
export default new Category_Controller()