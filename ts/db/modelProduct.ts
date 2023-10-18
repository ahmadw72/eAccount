import { connection, connect, Schema, Model, model } from "mongoose";
import { Database } from "./database";

export class modelProduct extends Database
{
    static _schema:Schema = new Schema(   // // 
            {
    
                buyingPrice: Number,
                expirayDate: Date,
                Manufacturer: String,
                manufacturingDate: Date,
                Name: String,
                Quantity: Number,
                sellingPrice: Number
              
              },{collection:'Products'});

              // there should be only one model, even for multiple instances of class modelProduct//
    static _model:any  = model('Products', this._schema);
    
    constructor(){

        

        super();
       /* if (connection.readyState != 1){

            connect(this.dbURL);

        }*/
        
      
/*
         this.productSchema = new Schema(
        {

            buyingPrice: Number,
            expirayDate: Date,
            Manufacturer: String,
            manufacturingDate: Date,
            Name: String,
            Quantity: Number,
            sellingPrice: Number
          
          },{collection:'Products'});
*/
 //    this.productModel = model('Products', this.productSchema);
        }

    

    /**
     * returns list of products 
     */

    getProducList(){

        const productQuery = modelProduct._model.find({});

        //  console.log(productQuery);
          productQuery.select();

          if(connection.readyState != 1)
              console.log('mangoose not connected')

          console.log('productList');
          const productList = /*await*/ productQuery.exec();
         // productList.Resolve();
          console.log(productList);
          return productList;



    }






}