'use strict';

var tvsubs = require('../lib/index.js');
var fs = require('fs');

tvsubs.search().then(function (data) {
	console.log(data);
}).catch(function (err) {
	console.log(err);
});

tvsubs.detail('new-girl').then(function (data) {
	console.log(data);
}).catch(function (err) {
	console.log(err);
});

tvsubs.season('new-girl/season-4/').then(function (data) {
	console.log(data);
}).catch(function (err) {
	console.log(err);
});

tvsubs.episode('new-girl/season-4/episode-13').then(function (data) {
	console.log(data);
}).catch(function (err) {
	console.log(err);
});

tvsubs.download('https://www.tv-subs.com/subtitle/new-girl-season-4-episode-13-english-291.zip').pipe(fs.createWriteStream('subtitle.zip'));
