// jsonToHtml.js

var fs = require('fs');

exports.convert = function (filename, html) {
	fs.writeFile(filename, html, function(err) {
		if (err) {
			return console.log(err);
		}
		console.log("The file was saved!");
	});
};
