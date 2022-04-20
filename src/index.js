const express = require('express');
var bodyParser = require('body-parser');
const requestIp = require('request-ip');
const date = require('date-and-time')

const route = require('./routes/routes')
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://jaganreddy-functionup:ORj2ygJHT7jbS3y8@cluster0.nduth.mongodb.net/jaganreddy-24?retryWrites=true&w=majority", {
    useNewUrlParser: true
   
  })
  .then( () => console.log("MongoDb is connected"))
  .catch ( err => console.log(err) )

  app.use(
    function(req,res,next){
        let ip = req.ip
        let url = req.originalUrl
        let data = new Date()
        var currentdate = new Date(); 
        var datetime = "Last Sync: " + currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
                     console.log(`${ip} ${url} ${datetime}`)
        next()
    }
)

// app.use(requestIp.mw())
 
// app.use(function(req, res) {
//     const ip = req.clientIp;
//     console.log(ip)
//     const now = new Date();
// console.log(date.format(now, 'YYYY/MM/DD HH:mm:ss')); 
// });

app.use('/',route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
