import { CategoryService } from "../service/categoryService";
import { Request, Response } from "express";
export declare class Category_Controller {
    categoryService: CategoryService;
    constructor();
    createPageCategory: (req: Request, res: Response) => void;
    createCategory: (req: Request, res: Response) => void;
}
declare const _default: Category_Controller;
export default _default;
