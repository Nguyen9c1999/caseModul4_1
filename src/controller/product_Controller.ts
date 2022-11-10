import {Product_Service} from "../service/productService";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload"
import {CategoryService} from "../service/categoryService";
export class Product_Controller{
    productService : Product_Service;
    categorySerVice:CategoryService
    constructor() {
        this.productService = new  Product_Service()
        this.categorySerVice = new CategoryService()
    }
    showProduct = async (req:Request,res:Response)=>{
        const products = await this.productService.findAll()
        const categorys = await this.categorySerVice.findAll()
        res.render('index',{products:products,categories:categorys})
    }
    pageCreate = async (req:Request,res:Response)=>{
        const categorys = await this.categorySerVice.findAll()

        res.render('create',{categorys:categorys})
    }
    createProduct = async (req:Request,res:Response)=>{
        let file = req.files
        if(file){
            let image = file.image as UploadedFile
            image.mv('./public/uploads/'+image.name)
            let newProduct = req.body
            newProduct.image=`uploads/${image.name}`
            await  this.productService.saveProduct(newProduct)
            res.redirect('/product')

        }


    }
    editPage = async (req:Request,res:Response)=>{
        let product = await this.productService.productRepo.findOneById(+req.params.id)
        const categorys = await this.categorySerVice.findAll()
        res.render('edit',{product:product,categorys:categorys})
    }
    editProduct = async (req:Request,res:Response)=>{
        let file = req.files
        if(file){
            let image = file.image as UploadedFile
            image.mv('./public/uploads/'+image.name)
            let newProduct = req.body
            newProduct.image=`uploads/${image.name}`
            await  this.productService.updateProduct(newProduct,+req.params.id)
            res.redirect('/product')

        }


    }
    deleteProduct = async (req:Request,res:Response)=>{
      await  this.productService.productRepo.delete(+req.params.id)
        res.redirect('/product')
    }
    searchProduct = async (req:Request,res:Response)=>{
        console.log(req.body.categoryId);
        let products
        if(req.body.categoryId!= null){
           products = await this.productService.searchProductByIdCategory(req.body.categoryId)
        }else {
           products = await this.productService.searchProduct(req.body.name)
        }

        const categorys = await this.categorySerVice.findAll()
        res.render('index',{products:products,categories:categorys})
    }
}
export default new Product_Controller()