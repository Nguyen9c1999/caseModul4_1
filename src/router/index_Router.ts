import router from 'express'
import {product_Router} from "./product_Router";
import {category_Router} from "./category_Router";
export const index_Router = router()
index_Router.use(product_Router)
index_Router.use(category_Router)