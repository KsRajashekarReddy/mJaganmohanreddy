const express = require('express');
const router = express.Router();
const logger =  require('../logger/logger');
const helper =  require('../util/helper');
const validate = require('../validator/formatter');
const _  = require("lodash");
const { request } = require('express');




router.get('/test-me', function (req, res) {
  logger.call()
  
    res.send('My first ever api!')

});
    router.get('/test-me23', function (req, res) {
    
    console.log('helper.js folder , date , month, year')
    helper.date();
    helper.month();
    helper.batch();


    
    console.log('formatter.js trim and tolowercase and touppercase methods');

    validate.formatter();


    res.send('My first ever api!')

    
});



router.get ('/hello',function(req, res){


    res.send('my first ever api')

});



    let lodash = require("lodash");
let arr = [
    'January', 
    'February',
     'March', 
     'April', 
     'May', 
     'June',
      'July', 
      'August', 
      'September', 
      'October',
       'November',
        'December'
   
];
  

console.log("After: ", lodash.chunk(arr, 3))




    
    const first10odd =[1,3,5,7,9,11,13,15,17,19 ];
    
    let newarray = _.tail(first10odd)
   console.log(newarray)

   





   let fivearrays = _.union([1, 2, 3],
    [3, 4, 5], 
    [6, 2, 7],
    [7,8,9],
    [9,10,11],); 

// Printing the output  
console.log(fivearrays)



const finalarray = [["horror","The Shining"],["drama","Titanic"],["thriller","ShutterIsland"],["fantasy","Pans Labyrinth"]];


let anotherarray = _.fromPairs(finalarray)

console.log(anotherarray)

   



module.exports = router;
// adding this comment for no reason