var tvsubs = require('../lib/index.js')();


 
tvsubs.search({query:"New Girl"}).then(function(data){
    return tvsubs.detail({path:data[0].value})
}).then(function(data){
	return tvsubs.season({path:data.season[3].path})
}).then(function(data){
	return tvsubs.episode({path:data.list[0].path})
}).then(function(data){
	return tvsubs.subtitle({path:data.list[0].path})
}).then(function(data){
	console.log(data);
}).catch(function(err){

console.log(err);

});
