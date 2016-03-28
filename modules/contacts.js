var fs = require('fs');

function readJsonFile() {
	var file = './data/contacts.json';
	return fs.readFileSync(file);
}

exports.list = function() {
	return JSON.parse(readJsonFile());
}

exports.query = function(number) {
	var json_result = JSON.parse(readJsonFile());
	var result = json_result.result;
	
	for (var i = 0; i < result.length; i++) {
		var contact = result[i];
		if (contact.number == number) {
			return contact;
		}
	}
	return null;
}

exports.queryByArg = function(arg, value) {
	var json_result = JSON.parse(readJsonFile());
	var result = json_result.result;
	
	for (var i = 0; i < result.length; i++) {
		var contact = result[i];
		if (contact[arg] == value) {
			return contact;
		}
	}
	return null;
}