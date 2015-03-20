var _ = require('underscore');
var rq = require('request-promise');
var Promise = require('bluebird');
var cheerio = require('cheerio');



/* @Name tvsubs
*  @Version 0.1.0
*  @author Ayhan Kuru
*/

module.exports = exports = tvsubs

/*
* 
* @param {opt} object 
*/


function tvsubs() {
 	if (!(this instanceof tvsubs)) return new tvsubs();
  	this._apiurl ="https://www.tv-subs.com";
}


		
/*
* 
* @param {opt} object 
*/

tvsubs.prototype.search = function(opt) {
  var opt = _.extend({query:"Lost"},opt);

  var self =this;
	var url =self._apiurl+"/a_mov.php?reqmov="+opt.query;

	return new Promise(function (resolve, reject) {
	
		rq(url)
		.then(function(data){

			resolve(JSON.parse(data).movies);

		})
		.catch(function (err) {
			reject(err);
		})
	});

};


		
/*
* 
* @param {opt} object exam: exam
*/

tvsubs.prototype.detail = function(opt) {
  var opt = _.extend({path:"lost"},opt);

  var self =this;
	var url =self._apiurl+"/tv/"+opt.path;

	return new Promise(function (resolve, reject) {
	
		rq(url)
		.then(function(data){

			try{
				var $ = cheerio.load(data);

				var chunk ={};

				chunk.title =$('.inner').children('h2').text().trim();
				chunk.year =$('.inner').children('div').eq(0).text().trim();
				chunk.type =$('.inner').children('div').eq(1).text().trim();
				chunk.desc =$('.inner').children('span').text().trim();
				chunk.season =[];

				$('ul.season-list li').each(function (i,el) {
					chunk.season.push({title:$('.season-list li').eq(i).text(),
									  path:$('.season-list li a').eq(i).attr('href')});
				})

				chunk.season=_.initial(chunk.season);

				resolve(chunk);

			}catch(err){
				reject(err);
			}

		})
		.catch(function (err) {
			reject(err);
		})
	});
};


		
/*
* desc
* @param {opt} object exam: exam
*/

tvsubs.prototype.season = function(opt) {
  	
  var opt = _.extend({path:"/tv/lost/season-1/"},opt);

  var self =this;
	var url =self._apiurl+opt.path;

	return new Promise(function (resolve, reject) {
	
		rq(url)
		.then(function(data){

			try{
				var $ = cheerio.load(data);

				var chunk ={};

				chunk.list =[];

				$('ul.episode-list li').each(function (i,el) {
					chunk.list.push({title:$('.episode-list li').eq(i).text(),
									  path:$('.episode-list li a').eq(i).attr('href')});
				})

				resolve(chunk);

			}catch(err){
				reject(err);
			}

		})
		.catch(function (err) {
			reject(err);
		})
	});

};

		
/*
* desc
* @param {opt} object exam: exam
*/

tvsubs.prototype.episode = function(opt) {
  var opt = _.extend({path:"/tv/lost/season-1/episode-1/"},opt);

  var self =this;
	var url =self._apiurl+opt.path;

	return new Promise(function (resolve, reject) {
	
		rq(url)
		.then(function(data){

			try{
				var $ = cheerio.load(data);

				var chunk ={};

				chunk.list =[];

				$('.tb-subtitle-list tbody tr').each(function (i,el) {
					chunk.list.push({title:$('.tb-subtitle-list tbody tr').eq(i).children('td').eq(3).text(),
									  path:$('.tb-subtitle-list tbody tr').eq(i).children('td').eq(2).find('a').attr('href'),
									  lang:$('.tb-subtitle-list tbody tr').eq(i).children('td').eq(2).text(),
									 uploader:$('.tb-subtitle-list tbody tr').eq(i).children('td').eq(4).text()});
				})

				resolve(chunk);

			}catch(err){
				reject(err);
			}

		})
		.catch(function (err) {
			reject(err);
		})
	});
};


		
/*
* desc
* @param {opt} object exam: exam
*/

tvsubs.prototype.subtitle = function(opt) {
  var opt = _.extend({},opt);

  var self =this;
	var url =self._apiurl+opt.path;

	return new Promise(function (resolve, reject) {
	
		rq(url)
		.then(function(data){

			try{
				var $ = cheerio.load(data);

				var chunk ={};

				chunk.path=$('.download-subtitle').attr('href');

				resolve(chunk);

			}catch(err){
				reject(err);
			}

		})
		.catch(function (err) {
			reject(err);
		})
	});
};




