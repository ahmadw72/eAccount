import { Schema, model } from "mongoose";
import { Database } from "./database";

export class modelSuppliers extends Database{

constructor(){ 
    super();
}


static _schema:Schema = new Schema( {
    Name:String,
    Address:String

}, {collection:'Suppliers'});


static _model:any = model('Suppliers',this._schema );


/**
 * 
 * @ returns list of suppliers ...
 */
getSuppliersList(){

    const suppliersQuery = modelSuppliers._model.find({});
    suppliersQuery.select();

    var suppliersList = suppliersQuery.exec();
    return suppliersList;


}





}