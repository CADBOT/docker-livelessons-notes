var express = require('express');
var app = express();

app.get('/notify', function(req, res) {
	//Code to sned user an email notification...
	console.log('user notified');
	res.json({msg: 'user notified'});
});

app.listen(process.env.port || 3000);
