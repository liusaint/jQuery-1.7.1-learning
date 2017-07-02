//用于一些小demo测试
//


/*匿名函数前后不加分号可能会出错*/
(function() {
	return;
	var n = 1(function() {})();
	//1 is not a function
})();

(function() {
	return;
	(function() {})()
	(function() {})();
	//(intermediate value)(...) is not a function
})();
/*匿名函数前后不加分号可能会出错*/

/*
$(this);
$()是一个方法。所以不要每个地方都用一下$(this)，而是把它运行的结果保存在一个变量里在，
毕竟运行一个函数与读取一个变量，性能相差太多。
*/


/*new a.b()的优先级问题*/
(function() {
	return;

	function A() {}
	A.prototype.a = function() {
		this.a = 1;
	}
	var a = new A;
	console.log(a)
	var b = new A.prototype.a()
	console.log(b)
})()
/*new a.b()的优先级问题*/