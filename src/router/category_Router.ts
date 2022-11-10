import router from 'express'
import category_Controller from "../controller/category_Controller";
export const category_Router = router()
category_Router.get('/category/create',category_Controller.createPageCategory)
category_Router.post('/category/create',category_Controller.createCategory)