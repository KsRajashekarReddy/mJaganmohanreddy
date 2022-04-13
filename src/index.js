const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route')
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://jaganreddy-functionup:ORj2ygJHT7jbS3y8@cluster0.nduth.mongodb.net/jaganreddy-24?retryWrites=true&w=majority", {
    useNewUrlParser: true
   
  })
  .then( () => console.log("MongoDb is connected"))
  .catch ( err => console.log(err) )



app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
