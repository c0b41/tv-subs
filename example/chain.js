'use strict';
var tvsubs = require('../lib/index.js');
var fs = require('fs');

tvsubs.search('New Girl')
.then(function (data) {
	return tvsubs.detail(data[0].value);
}).then(function (detail) {
	return tvsubs.season(detail.season[3].path);
}).then(function (episode) {
	return tvsubs.episode(episode[1].path);
}).then(function (data) {
	return tvsubs.download(data[1].download);
}).then(function (file) {
	file.pipe(fs.createWriteStream('subtitle.zip'));
}).catch(function (err) {
	console.log(err);
});
