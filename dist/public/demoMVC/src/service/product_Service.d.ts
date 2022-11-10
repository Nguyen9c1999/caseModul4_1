import { Request, Response } from "express";
export declare class Product_Service {
    productRepo: any;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
    createProduct: (product: any) => Promise<void>;
}
