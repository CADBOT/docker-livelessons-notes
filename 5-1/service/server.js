var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.json({'msg': 'some message'})
});

var port = process.env.port || 300;
app.listen(port, function() {
	console.log('server started');
});
