var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var app = express();

//Pages
var index = require('./routes/index');



//Routes
app.get('/',index.view);






//
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));


var PORT = 3000;
var port = process.env.PORT || PORT;

app.listen(port,function(){
  console.log('Server running on port %s',port);
});