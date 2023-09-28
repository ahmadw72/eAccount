
//import {Database} from './db/database.js';
var express = require('express');
var router = express.Router();
var app= require('../app');

const { Database } = require('../ts/tscOut/db/database');


//var db = new Database(); 

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  //var products = db.productList();
 //console.log('fffffffff');
  //console.log(products);
  
  res.render('index', { title: 'Express0001S' });


});

module.exports = router;
