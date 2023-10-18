"use strict";
/**
 *
 * utility functions
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("./types");
/**
 * initializes the database
 */
function initDb() {
    mongoose_1.default.connect(types_1.dbURL);
}
exports.initDb = initDb;
