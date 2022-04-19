const requestIp = require('request-ip');


const newdata = function(req,res,next) {
console.log('hi im checking ')
next()

}


const data = function(req,res,next) {
    console.log('hello im new api ')
   

    next()
    
    }

    

    const ipMiddleware = function(req, res, next) {
        const clientIp = requestIp.getClientIp(req); 
        console.log(clientIp)
        next();
    };




    module.exports.newdata = newdata
    module.exports.data = data
    module.exports.ipMiddleware = ipMiddleware
    