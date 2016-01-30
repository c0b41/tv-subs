'use strict';

var _ = require('underscore');
var cheerio = require('cheerio');
var url = require('url');

var season = function (data) {
	return new Promise(function (resolve, reject) {
		try {
			var $ = cheerio.load(data);
			var chunk = [];
			$('ul.episode-list li').each(function (i) {
				var SeasonName = $('.episode-list li').eq(i).text();
				var SeasonPath = ($('.episode-list li a').eq(i).attr('href')).split('/');
				chunk.push({title: SeasonName, path: '/' + SeasonPath[2] + '/' + SeasonPath[3] + '/' + SeasonPath[4]});
			});
			resolve(chunk || null);
		} catch(err) {
			reject(err);
		}
	});
};

var episode = function (data) {
	return new Promise(function (resolve, reject) {
		try {
			var $ = cheerio.load(data);
			var chunk = [];

			$('.tb-subtitle-list tbody tr').each(function (i) {
				var PATH = $('.tb-subtitle-list tbody tr').eq(i).children('td').eq(2).find('a').attr('href');
				chunk.push({title: $('.tb-subtitle-list tbody tr').eq(i).children('td').eq(3).text(), lang: $('.tb-subtitle-list tbody tr').eq(i).children('td').eq(2).text(), download: url.resolve('https://www.tv-subs.com', 'subtitle/' + PATH.split('/')[2] + '.zip'), uploader: $('.tb-subtitle-list tbody tr').eq(i).children('td').eq(4).text()});
			});
			resolve(chunk || null);
		} catch(err) {
			reject(err);
		}
	});
};

var detail = function (data) {
	return new Promise(function (resolve, reject) {
		try {
			var $ = cheerio.load(data);

			var chunk = {};

			chunk.title = $('.inner').children('h2').text().trim();
			chunk.year = $('.inner').children('div').eq(0).text().trim();
			chunk.type = $('.inner').children('div').eq(1).text().trim();
			chunk.desc = $('.inner').children('span').text().trim();
			chunk.season = [];

			$('ul.season-list li').each(function (i) {
				var SeasonName = $('.season-list li').eq(i).text();
				var SeasonPath = ($('.season-list li a').eq(i).attr('href')).split('/');
				chunk.season.push({title: SeasonName, path: '/' + SeasonPath[2] + '/' + SeasonPath[3]});
			});

			chunk.season = _.initial(chunk.season);

			resolve(chunk);
		} catch(err) {
			reject(err);
		}
	});
};

exports.detail = detail;
exports.season = season;
exports.episode = episode;
