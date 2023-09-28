// represents the database //

import { Model, Schema, model, connect, connection } from "mongoose";

export class Database{
    
   // productSchema:Schema ;
   // productModel:any;

    dbURL:string = 'mongodb://127.0.0.1:27017/eAccount';
    

    constructor(){
       // super();

        //this.mangoose = mangoose;
        if (connection.readyState != 1){

            connect(this.dbURL);

        }
    }
        
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

    this.productModel = model('Products', this.productSchema);
        }
   // const myVariable = 'this';
    // return the list of the products // 
    */
    /*async*/ 
    /*productList(){

            const productQuery = this.productModel.find({});

          //  console.log(productQuery);
            productQuery.select();

            if(connection.readyState != 1)
                console.log('mangoose not connected')

            console.log('productList');
            const productList = /*await*/ /*productQuery.exec();
           // productList.Resolve();
            console.log(productList);
            return productList;


    }*/



}