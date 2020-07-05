const express = require('express');
const mongoose = require('mongoose');
var BillRouter=require('./router/bill.router');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/qldonhang', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var cors = require('cors')

app.get('/',(req,res)=>{
    res.send('uuu')
})
app.use('/bill',cors(),BillRouter)
const port = 3001;

app.listen(port);