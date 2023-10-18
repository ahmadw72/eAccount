"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelSuppliers = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("./database");
class modelSuppliers extends database_1.Database {
    constructor() {
        super();
    }
    /**
     *
     * @ returns list of suppliers ...
     */
    getSuppliersList() {
        const suppliersQuery = _a._model.find({});
        suppliersQuery.select();
        var suppliersList = suppliersQuery.exec();
        return suppliersList;
    }
}
exports.modelSuppliers = modelSuppliers;
_a = modelSuppliers;
modelSuppliers._schema = new mongoose_1.Schema({
    Name: String,
    Address: String
}, { collection: 'Suppliers' });
modelSuppliers._model = (0, mongoose_1.model)('Suppliers', _a._schema);
