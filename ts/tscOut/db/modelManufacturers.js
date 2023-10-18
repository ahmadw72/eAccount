"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelManufacturers = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("../db/database");
class modelManufacturers extends database_1.Database {
    constructor() {
        super();
    }
    /**
     *
     * @returns list of all the manufacturers
     */
    getManufacturersList() {
        const manufacturerQuery = _a._model.find({});
        //  console.log(productQuery);
        manufacturerQuery.select();
        if (mongoose_1.connection.readyState != 1)
            console.log('mangoose not connected');
        //   console.log('productList');
        const manufacturerList = /*await*/ manufacturerQuery.exec();
        // productList.Resolve();
        console.log(manufacturerList);
        return manufacturerList;
    }
}
exports.modelManufacturers = modelManufacturers;
_a = modelManufacturers;
modelManufacturers._schema = new mongoose_1.Schema({
    Name: String,
    Address: String
}, { collection: 'Manufacturers' });
modelManufacturers._model = (0, mongoose_1.model)('Manufacturers', _a._schema);
