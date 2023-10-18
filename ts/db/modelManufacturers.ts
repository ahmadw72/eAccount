import { Model, Schema, model, connection } from "mongoose";
import { Database } from "../db/database";
import { Router, Request, Response } from "express";

export class modelManufacturers extends Database
{
    constructor()
    {
        super();
    }

    static _schema:Schema = new Schema({
        Name:String,
        Address: String

    }, {collection:'Manufacturers'});

    static _model:any = model('Manufacturers', this._schema);
/**
 * 
 * @returns list of all the manufacturers 
 */

    getManufacturersList(){
        const manufacturerQuery = modelManufacturers._model.find({});

        //  console.log(productQuery);
        manufacturerQuery.select();

          if(connection.readyState != 1)
              console.log('mangoose not connected')

       //   console.log('productList');
          const manufacturerList = /*await*/ manufacturerQuery.exec();
         // productList.Resolve();
          console.log(manufacturerList);
          return manufacturerList;

    }








}