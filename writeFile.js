/*
To test this file run it in terminal and then do a post request like this:
curl --data "name=saeid" http://localhost:9001/
*/

var fs = require('fs');
var http = require('http');
var qs = require('querystring');

var server = http.createServer(function (request, response) {
	var html = '<p>' + "hello world" + '</p>';

	console.log(html);

	if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            // use post['blah'], etc.
			//console.log(post);
			var html = '';

			for (var attributename in post) {
				console.log(attributename + ": " + post[attributename]);
				html +=  '<p>' + attributename + ": " + post[attributename] + '</p>';
			}

			fs.writeFile('test.html', html, function(err) {
				if (err) {
					return console.log(err);
				}
				console.log("The file was saved!");
			});
        });
    }

	response.end();
});

server.listen(9001);
