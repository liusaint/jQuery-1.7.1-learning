//node环境运行的话。需要单独引入$。
var require;
if(require){
	$ = require("./jquery.js");
}

// var callback = $.Callbacks('once memory');
// callback.add(function(msg){
// 	console.log(msg);
// 	return false;
// })
// callback.add(function(msg){
// 	console.log(msg,1)
// })

// callback.fire('first');

// callback.fire('second');
// callback.add(function(msg){
// 	console.log(msg,2)
// })


function fn1(arg){
	console.log('fn1',arg);
}
function fn2(arg){
	console.log('fn2',arg);
}
var defer = $.Deferred(),
filtered = defer.pipe(function(value){
	return value *2;
})
defer.done(fn1);
filtered.done(fn2);
defer.resolve(5)