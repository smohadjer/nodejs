//use curl -d "string" http://localhost:3000 to POST
//use curl http://localhost:3000 to GET

var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function (req, res) {
	switch (req.method) {
		case 'POST':
			var item = '';
			req.setEncoding('utf8');
			req.on('data', function(chunk) {
				item += chunk;
			});
			req.on('end', function() {
				items.push(item);
				res.end('Ok\n');
			});
			break;
		case 'GET':
			/*
			items.forEach(function(item, i) {
				res.write(i + ') ' + item + '\n')
			});
			res.end();
			*/
			var body = items.map(function(item, i) {
				return i + ') ' + item;
			}).join('\n') + '\n';
			res.setHeader('Content-Length', Buffer.byteLength(body));
			res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
			res.end(body);

			break;
	}
});
server.listen(3000);
