"use strict";
// represents the database //
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = require("mongoose");
class Database {
    constructor() {
        // super();
        // productSchema:Schema ;
        // productModel:any;
        this.dbURL = 'mongodb://127.0.0.1:27017/eAccount';
        //this.mangoose = mangoose;
        if (mongoose_1.connection.readyState != 1) {
            (0, mongoose_1.connect)(this.dbURL);
        }
    }
}
exports.Database = Database;
