'use strict';

var got = require('got');
var url = require('url');
var apiurl = 'https://www.tv-subs.com';
var util = require('./util.js');

/* @Name tvsubs
*  @Version 0.2.0
*  @author Ayhan Kuru
*/

function Tvsubs() {}

/*
* search keyword
* @param {query} string
*/

Tvsubs.prototype.search = function (query) {
	query = query ? query : 'lost';
	return got(url.resolve(apiurl, '/a_mov.php?reqmov=' + query)).then(function (res) {
		return JSON.parse(res.body).movies || null;
	});
};

/*
* show detail
* @param {path} string
*/

Tvsubs.prototype.detail = function (path) {
	path = path ? path : 'lost';
	return got(url.resolve(apiurl, '/tv/' + path)).then(function (res) {
		return util.detail(res.body);
	});
};

/*
* show season
* @param {path} string
*/

Tvsubs.prototype.season = function (path) {
	path = path ? path : 'lost/season-1/episode-1/';
	return got(url.resolve(apiurl, '/tv/' + path)).then(function (res) {
		return util.season(res.body);
	});
};

/*
* show episode
* @param {path} string
*/

Tvsubs.prototype.episode = function (path) {
	path = path ? path : 'lost/season-1';
	return got(url.resolve(apiurl, '/tv/' + path)).then(function (res) {
		return util.episode(res.body);
	});
};

/*
* download write
* @param {path} string
*/

Tvsubs.prototype.download = function (path) {
	return got.stream(path);
};

module.exports = new Tvsubs();
