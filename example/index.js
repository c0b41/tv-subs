var tvsubs = require('../lib/index.js')();


 
tvsubs.search({query:"New Girl"}).then(function(data){
    console.log(data);
}).catch(function(err){

console.log(err);

});



tvsubs.detail({path:"new-girl"}).then(function(data){
    console.log(data);
}).catch(function(err){

console.log(err);

});


tvsubs.season({path:"/tv/new-girl/season-4/"}).then(function(data){
    console.log(data);
}).catch(function(err){

console.log(err);

});


tvsubs.episode({path:"/tv/new-girl/season-4/"}).then(function(data){
    console.log(data);
}).catch(function(err){

console.log(err);

});


tvsubs.subtitle({path:"/subtitles/new-girl-season-4-episode-13-english-291"}).then(function(data){
    console.log(data);
}).catch(function(err){

console.log(err);

});

