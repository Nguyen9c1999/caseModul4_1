import router from 'express'
import product_Controller from "../controller/product_Controller";
export const product_Router = router()
product_Router.get('/product',product_Controller.showProduct)
product_Router.get('/create',product_Controller.pageCreate)
product_Router.post('/create',product_Controller.createProduct)
product_Router.get('/edit/:id',product_Controller.editPage)
product_Router.post('/edit/:id',product_Controller.editProduct)
product_Router.get('/delete/:id',product_Controller.deleteProduct)
product_Router.post('/product',product_Controller.searchProduct)