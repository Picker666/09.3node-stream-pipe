/*
* @Author: Administrator
* @Date:   2018-11-08 17:14:23
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-08 17:29:03
*/

'use strict';
var http = require('http');
var fs = require('fs');
var path = require('path');

var file = path.resolve('one.txt');
var file2 = path.resolve('two.txt');

http.createServer(function(request, response){
	var pathName = request.url;
	console.log(pathName);
	if (pathName !== '/favicon.ico') {
		var readable = fs.createReadStream(file, { highWaterMark: 5 });

		var writable = fs.createWriteStream(file2, {
			// defaultEncoding: 'utf8',
			// flags: 'a+'
		});

		readable.pipe(writable);

		readable.on('open', function () {
			console.log('success to open file...');
		});

		readable.on('end', function() {
			response.end('Game over !!!');
			console.log('this is end ...');
		});

	}
}).listen(8888);

console.log('server is running...');

