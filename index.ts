import express from 'express'
import bodyParser from "body-parser";
import {index_Router} from "./src/router/index_Router";

import fileUpload from 'express-fileupload';
const app = express()

app.use(fileUpload({
    createParentPath: true
}));
app.set("views", "views");
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.json());
app.use('',index_Router)

app.listen(3000,()=>{
    console.log('server is running 3000')
})