"use strict";
// represents the database //
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = require("mongoose");
class Database {
    constructor() {
        // super();
        this.dbURL = 'mongodb://127.0.0.1:27017/eAccount';
        //this.mangoose = mangoose;
        if (mongoose_1.connection.readyState != 1) {
            (0, mongoose_1.connect)(this.dbURL);
        }
        this.productSchema = new mongoose_1.Schema({
            buyingPrice: Number,
            expirayDate: Date,
            Manufacturer: String,
            manufacturingDate: Date,
            Name: String,
            Quantity: Number,
            sellingPrice: Number
        }, { collection: 'Products' });
        this.productModel = (0, mongoose_1.model)('Products', this.productSchema);
    }
    // const myVariable = 'this';
    // return the list of the products // 
    /*async*/ productList() {
        const productQuery = this.productModel.find({});
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
exports.Database = Database;
