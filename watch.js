var fs = require('fs');
var jsonToHtml = require('./jsonToHtml.js')

fs.watch('test.json', function (event, filename) {
	console.log('event is: ' + event);
	if (filename) {
		console.log('filename provided: ' + filename);
		jsonToHtml.convert('test.html', '<p>Saeid</p>');

	} else {
		console.log('filename not provided');
	}
});
