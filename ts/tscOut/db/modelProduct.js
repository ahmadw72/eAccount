"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelProduct = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("./database");
class modelProduct extends database_1.Database {
    constructor() {
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
    getProducList() {
        const productQuery = _a._model.find({});
        //  console.log(productQuery);
        productQuery.select();
        if (mongoose_1.connection.readyState != 1)
            console.log('mangoose not connected');
        console.log('productList');
        const productList = /*await*/ productQuery.exec();
        // productList.Resolve();
        console.log(productList);
        return productList;
    }
}
exports.modelProduct = modelProduct;
_a = modelProduct;
modelProduct._schema = new mongoose_1.Schema(// // 
{
    buyingPrice: Number,
    expirayDate: Date,
    Manufacturer: String,
    manufacturingDate: Date,
    Name: String,
    Quantity: Number,
    sellingPrice: Number
}, { collection: 'Products' });
// there should be only one model, even for multiple instances of class modelProduct//
modelProduct._model = (0, mongoose_1.model)('Products', _a._schema);
