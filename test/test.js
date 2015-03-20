var tvsubs =require('../lib/index.js')();
var expect = require('expect.js');

describe('Search Test!!!...', function () {
	

	it('Test :1', function (done) {
		
		tvsubs.search({query:"New Girl"}).then(function(data){
				
				expect(data).to.be.an('object');
				expect(data[0].label).to.eql('New Girl 2011');	
				expect(data[0].value).to.eql('new-girl');
				done();
			},function (err) {
					expect(err).to.exist;
					done();
			});
	});

});

describe('Detail Test!!!...', function () {
	

	it('Test :1', function (done) {
		
		tvsubs.detail({path:"new-girl"}).then(function(data){
				
				expect(data).to.be.an('object');
				expect(data.title).to.eql('New Girl');	
				expect(data.year).to.eql(2011);
				expect(data.type).to.eql('Comedy'); 
				expect(data.season.length).to.eql(4);
				expect(data.season[0].title).to.eql('Season 1');
				expect(data.season[0].path).to.eql('/tv/new-girl/season-1/');
				done();
			},function (err) {
					expect(err).to.exist;
					done();
			});
	});

});


describe('Season Test!!!...', function () {
	

	it('Test :1', function (done) {
		
		tvsubs.season({path:"/tv/new-girl/season-4/"}).then(function(data){
				
				expect(data).to.be.an('object');
				expect(data.list.length).to.eql(7);
				expect(data.list[0].title).to.eql('Episode 1');
				expect(data.list[0].path).to.eql('/tv/new-girl/season-4/episode-1/');
				done();
			},function (err) {
					expect(err).to.exist;
					done();
			});
	});

});


describe('Episode Test!!!...', function () {
	

	it('Test :1', function (done) {
		
		tvsubs.episode({path:"/tv/new-girl/season-4/episode-13/"}).then(function(data){
				
				expect(data).to.be.an('object');
				expect(data.list.length).to.eql(4);
				expect(data.list[0].title).to.eql('New.Girl.S04E13.HDTV.x264-KILLERS');
				expect(data.list[0].path).to.eql('/subtitles/new-girl-season-4-episode-13-arabic-624');
				expect(data.list[0].lang).to.eql('Arabic');
				expect(data.list[0].uploader).to.eql('anonymous');
				done();
			},function (err) {
					expect(err).to.exist;
					done();
			});
	});

});

describe('Subtitle Test!!!...', function () {
	

	it('Test :1', function (done) {
		
		tvsubs.subtitle({path:"/subtitles/new-girl-season-4-episode-13-english-291"}).then(function(data){
				
				expect(data).to.be.an('object'); 
				expect(data.path).to.eql('https://www.tv-subs.com/subtitle/new-girl-season-4-episode-13-english-291.zip');
 
				done();
			},function (err) {
					expect(err).to.exist;
					done();
			});
	});

});

