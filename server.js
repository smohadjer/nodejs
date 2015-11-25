var http = require('http');
var server = http.createServer(function (req, res) {
	var body = '<h1>Hello World</h1>';
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 302;
	//res.write(body);
	res.end(body);
});
server.listen(3000);
