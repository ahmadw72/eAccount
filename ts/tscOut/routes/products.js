"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../db/database");
//import { Database } from "..db/database.ts";
//impot {Router}
const producRouter = (0, express_1.Router)();
/**
 *
 * get
 */
var db = new database_1.Database();
producRouter.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('get of products');
    var proList = yield db.productList();
    console.log(proList);
    res.render('productList', { pl: proList });
}));
//export default producRouter;
module.exports = producRouter;
