var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/lib', express.static('bower_components/jquery/dist'));
app.use(express.static('public'));

app.post('/api/item', function (req, res) {
	console.dir(req.body);
	res.json({res: "OK"});
});

app.listen(8888, function () {
	console.log('Serwer działa na porcie 8888');
});