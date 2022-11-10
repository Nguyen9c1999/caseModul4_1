export declare class Product_Service {
    productRepo: any;
    constructor();
    findAll: () => Promise<any>;
    saveProduct: (product: any) => Promise<void>;
    updateProduct: (product: any, id: any) => Promise<void>;
    searchProduct: (name: any) => Promise<any>;
    searchProductByIdCategory: (idCategory: any) => Promise<any>;
}
