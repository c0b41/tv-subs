[![Travis Build Status](http://img.shields.io/travis/ayhankuru/tv-subs.svg?style=flat-square)](https://travis-ci.org/ayhankuru/tv-subs) [![Circle Build Status](https://img.shields.io/circleci/project/ayhankuru/tv-subs.svg?style=flat-square)](https://circleci.com/gh/ayhankuru/tv-subs) [![Appveyor Build Status](https://img.shields.io/appveyor/ci/ayhankuru/tv-subs.svg?style=flat-square)](https://ci.appveyor.com/project/ayhankuru/tv-subs) [![Build Status](https://img.shields.io/david/ayhankuru/tv-subs.svg?style=flat-square)](https://david-dm.org/ayhankuru/tv-subs) [![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat-square)](https://iojs.org)



tv-subs.com simple api

#### node ^4.2 and ^5.0 support

## Install

```
npm install tv-subs
```

## Usage


```js
var tvsubs = require('tv-subs');
```


## Search


| Arguments     | Type          | Default       | Example       |
| ------------- |:-------------:|:-------------:|:-------------:|
| Argument      | string        | Lost          |  New Girl     |


```js
tvsubs.search("New Girl").then(function(data){
    console.log(data);
}).catch(function(err){

console.log(err);

});

```

**output**

```json
{ "label": "New Girl 2011", "value": "new-girl" }

```



## Detail


| Arguments     | Type          | Default       | Example       |
| ------------- |:-------------:|:-------------:|:-------------:|
| Argument      | string        | lost          |  new-girl     |


```js
tvsubs.detail("new-girl").then(function(data){
    console.log(data);
}).catch(function(err){

console.log(err);

});

```

**output**

```json
{
  "title": "New Girl",
  "year": "2011",
  "type": "Comedy",
  "desc": "Jessica Day is an offbeat and adorable girl in her late 20s who, after a bad breakup, moves in with three single guys. Goofy, positive, vulnerable and honest to a fault, Jess has faith in people, even when she shouldn\'t. Although she\'s dorky and awkward, she\'s comfortable in her own skin. More prone to friendships with women, she\'s not used to hanging with the boys—especially at home.",
  "season":
   [ { "title": "Season 1", "path": "/tv/new-girl/season-1/" },
     { "title": "Season 2", "path": "/tv/new-girl/season-2/" },
     { "title": "Season 3", "path": "/tv/new-girl/season-3/" },
     { "title": "Season 4", "path": "/tv/new-girl/season-4/" } ]
}

```

## Season


| Arguments     | Type          | Default       | Example       |
| ------------- |:-------------:|:-------------:|:-------------:|
| Argument         | string        | /lost/season-1 |  /new-girl/season-4  |


```js
tvsubs.season("/new-girl/season-4").then(function(data){
    console.log(data);
}).catch(function(err){

console.log(err);

});

```

**output**

```json
[{ "title": "Episode 13",
       "path": "/tv/new-girl/season-4/episode-13/" } ];


```


## Episode


| Arguments     | Type          | Default       | Example       |
| ------------- |:-------------:|:-------------:|:-------------:|
| Argument         | string        | /lost/season-1/episode-1         |  /tv/new-girl/season-4/episode-13     |


```js
tvsubs.episode("/new-girl/season-4/episode-13").then(function(data){
    console.log(data);
}).catch(function(err){

console.log(err);

});

```

**output**

```json
    [ { "title": "New.Girl.S04E13.HDTV.x264-KILLERS",
       "path": "/subtitles/new-girl-season-4-episode-13-arabic-624",
       "lang": "Arabic",
       "download":"http://www.tv-subs.com/subtitle/new-girl-season-4-episode-13-arabic-624.zip",
       "uploader": "anonymous" }];
```

## download


| Arguments     | Type          |  Example       |
| ------------- |:-------------:|:-------------:|
| Argument      | string        |  http://www.tv-subs.com/subtitle/new-girl-season-4-episode-13-arabic-624.zip    |


```js
tvsubs.download("http://www.tv-subs.com/subtitle/new-girl-season-4-episode-13-arabic-624.zip"}).then(function(file){
    // donwload function return stream  
    file.pipe(fs.createWriteStream('subtitle.zip'));

}).catch(function(err){

console.log(err);

});


```
