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


// function fn1(arg){
// 	console.log('fn1',arg);
// }
// function fn2(arg){
// 	console.log('fn2',arg);
// }
// var defer = $.Deferred(),
// filtered = defer.pipe(function(value){
// 	return value *2;
// })
// defer.done(fn1);
// filtered.done(fn2);
// defer.resolve(5)


//兼容性测试
// $(function(){
// 	var result = '',counter = 0 ;
// 	for(var n in $.support){
// 		console.log(n,':',$.support[n]," ",++counter);

// 	}
// })
// 
// 

document.getElementsByTagName('button')[0].onclick = function(){
	console.log('bind ori');
}

$('button').on('click',  function(event) {
console.log(1);
});
$(".p_div").on('click',  function(event) {
console.log(2);
});

$('body').on('click.p_div','.p_div',function(){
	console.log('click.p_div');
})
// $('button').off('click');
// $('button').trigger('click');
$('body').trigger('click');


$(function(){
	console.log('ready');
})

// $(".enter_out").mouseover(function(event) {
// 	console.log('enter');
// });

// $(".enter_out").mouseout(function(event) {
// 	console.log('leave out');
// });

// $(".enter_in").mouseover(function(event) {
// 	console.log('over in');
// });


// $("body").mouseout(function(event) {
// 	console.log('leave body');
// });

$(".enter_out").mouseenter(function(event) {
	console.log('enter out');
});

$(".enter_out").mouseleave(function(event) {
	console.log('leave out');
});

$(".enter_in").mouseenter(function(event) {
	console.log('enter in');
});

$(".enter_in").mouseleave(function(event) {
	console.log('leave in');
});