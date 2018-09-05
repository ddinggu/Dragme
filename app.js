const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// router file을 import 해온다. 
const router = require('./router/index');

app.set('views',__dirname+'/public/view');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(router);

app.listen(4000, ()=> {
    console.log('port 4000');
});
