/**
 * 
 * utility functions
 */


import mongoose from "mongoose";
import {dbURL} from './types';
/**
 * initializes the database
 */

export function initDb():void{

    mongoose.connect(dbURL);


}