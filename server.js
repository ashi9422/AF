'use strict';

const bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//import models and routes
require('./modules/supplier.module/supplier.model');
const supplier=require('./modules/supplier.module/supplier.route');


const app = express();
app.use(bodyParser.json());
app.use('/sup',supplier);

mongoose.connect('mongodb://codechamps:codechamps123@ds129651.mlab.com:29651/codechamps', err => {
    if (err) {
        console.log(err);
        //process.exit(1);
    }
    else {
        console.log('connect to the database');
    }
});

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/main/index.html');
});


app.listen(3000, function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("server listen on port 3000")
    }
});