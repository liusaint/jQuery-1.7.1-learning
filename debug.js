//node环境运行的话。需要单独引入$。
var require;
if(require){
	$ = require("./jquery.js");
}

var callback = $.Callbacks('once memory');
callback.add(function(msg){
	console.log(msg);
	return false;
})
callback.add(function(msg){
	console.log(msg,1)
})

callback.fire('first');
debugger;
callback.fire('second');
callback.add(function(msg){
	console.log(msg,2)
})