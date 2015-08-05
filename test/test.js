'use strict';

var tvsubs = require('../lib/index.js');
var expect = require('expect.js');

describe('Search Test!!!...', function () {
	it('Test :1', function () {
		return tvsubs.search('New Girl').then(function (data) {
			expect(data).to.be.an('object');
			expect(data[0].label).to.eql('New Girl 2011');
			expect(data[0].value).to.eql('new-girl');
		});
	});
});

describe('Detail Test!!!...', function () {
	it('Test :1', function () {
		return tvsubs.detail('new-girl').then(function (data) {
			expect(data).to.be.an('object');
			expect(data.title).to.eql('New Girl');
			expect(data.year).to.eql(2011);
			expect(data.type).to.eql('Comedy');
			expect(data.season.length).to.eql(4);
			expect(data.season[0].title).to.eql('Season 1');
			expect(data.season[0].path).to.eql('/new-girl/season-1');
		});
	});
});

describe('Season Test!!!...', function () {
	it('Test :1', function () {
		return tvsubs.season('new-girl/season-4').then(function (data) {
			expect(data).to.be.an('object');
			expect(data.length).to.eql(11);
			expect(data[0].title).to.eql('Episode 1');
			expect(data[0].path).to.eql('/new-girl/season-4/episode-1');
		});
	});
});

describe('Episode Test!!!...', function () {
	it('Test :1', function () {
		return tvsubs.episode('new-girl/season-4/episode-13/').then(function (data) {
			expect(data).to.be.an('object');
			expect(data.length).to.eql(4);
			expect(data[0].title).to.eql('New.Girl.S04E13.HDTV.x264-KILLERS');
			expect(data[0].download).to.eql('https://www.tv-subs.com/subtitle/new-girl-season-4-episode-13-arabic-624.zip');
			expect(data[0].lang).to.eql('Arabic');
			expect(data[0].uploader).to.eql('anonymous');
		});
	});
});
