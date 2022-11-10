import { Product_Service } from "../service/productService";
import { Request, Response } from "express";
import { CategoryService } from "../service/categoryService";
export declare class Product_Controller {
    productService: Product_Service;
    categorySerVice: CategoryService;
    constructor();
    showProduct: (req: Request, res: Response) => Promise<void>;
    pageCreate: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    editPage: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
    searchProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: Product_Controller;
export default _default;
