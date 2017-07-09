//node环境运行的话。需要单独引入$。
var require;
if(require){
	$ = require("./jquery.js");
}

var callback = $.Callbacks('once');
callback.add(function(msg){
	console.log(msg)
})
callback.fire('first');
callback.fire('second');