import { Request, Response } from "express";
import { Router } from "express";
import { modelSuppliers } from "../db/modelSuppliers";



const suppliersRouter = Router();



suppliersRouter.get('/', async (req:Request, res:Response, next)=>{


    var suppliers:modelSuppliers = new modelSuppliers();

    var suppliersList = await suppliers.getSuppliersList();

    console.log(suppliersList);

    res.render('suppliersList', {sl:suppliersList})



})

module.exports = suppliersRouter;