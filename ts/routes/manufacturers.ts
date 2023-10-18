import { Router, Request, Response } from "express";
import { modelManufacturers } from "../db/modelManufacturers";





const manufacturersRouter = Router(); 


manufacturersRouter.get('/', async (req:Request, res:Response, next)=> {

    console.log('get manufacturersRouter');

    var manufacturers:modelManufacturers = new modelManufacturers();
    
    var manufacturersList = await manufacturers.getManufacturersList();

    console.log(manufacturersList);

    res.render('manufacturersList', {ml:manufacturersList});



})

module.exports = manufacturersRouter;

