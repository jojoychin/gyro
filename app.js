var app = require('express')();
var server = require('http').Server(app);
var port = process.env.PORT || 9000;

var database = {
	score: 0
};

// app.get('/', function(req, res) {
// 	res.send('hello');
// });

app.get('/get-score', function(req, res) {

	// ddb.getItem('TestGameScore', 'universal-player', null, {},
	// 	function(err, ddbResult, cap) {
	// 		res.send(ddbResult);
	// 		console.log("Score requested:");
	// 		console.log(ddbResult);
	// 	}
	// );
	res.send(database);
});

app.get('/set-score', function(req, res) {
	console.log(req.query);
	database.score = parseInt(req.query.score);
	res.send(req.query);

	var newData = {
		"playerID": "universal-player",
		score: parseInt(req.query.score)
	};
});

// app.listen(3000);
server.listen(port, function(){
	console.log('server running at port: '+ port);
});
