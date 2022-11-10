import { Product_Service } from "../service/product_Service";
import { Request, Response } from "express";
declare class Product_Controller {
    productService: Product_Service;
    constructor();
    showProduct: (req: Request, res: Response) => Promise<void>;
    createPage: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: Product_Controller;
export default _default;
