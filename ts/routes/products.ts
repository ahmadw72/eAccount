import { Router,Request, Response } from "express";
import { Database } from "../db/database";
import { modelProduct } from "../db/modelProduct";
//import { Database } from "..db/database.ts";
//impot {Router}


const producRouter = Router();

/**
 * 
 * get 
 */
var db = new Database();
producRouter.get('/',async (req:Request, res:Response, next)=>{



    console.log('get of products');
    
    var products:modelProduct = new modelProduct();

    var proList = await products.getProducList();

    console.log(proList);


    res.render('productList', {pl:proList});

})


//export default producRouter;

module.exports = producRouter; 