import {AppDataSource} from "../data_source";
import {Product} from "../entity/product";

export class Product_Service {
    productRepo : any
    constructor() {
        AppDataSource.initialize().then(async connection=>{
            console.log('succ')
            this.productRepo = await connection.getRepository(Product)
        })
    }
    findAll=async ()=>{
        return await this.productRepo.find()
    }
    saveProduct = async (product)=>{
       await this.productRepo.save(product)
    }
    updateProduct = async (product,id)=>{
        await this.productRepo.update({idProduct:id},product)
    }
    searchProduct = async (name)=>{
        return await this.productRepo.query(`select * from product where name like '%${name}%'`)
    }
    searchProductByIdCategory = async (idCategory)=>{
        return await this.productRepo.query(`select * from product where idCategory = ${idCategory}`)
    }




}