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
})();
/*new a.b()的优先级问题*/

/*jQuery中很喜欢用代码求值。
如if ( (options = arguments[ i ]) != null ) {}
*/

/* for in 枚举性
 
 */
(function() {
	var a = {};

	for (var i in a) {
		console.log(i)
	}

	function A() {

	}
	A.prototype = {
		constructor: A,
		a: 'a',
		b: 'b'
	}

	var a1 = new A;

	for (var i in a1) {
		console.log(i)
	}

})();

/*this.constructor()这种用法*/


/*defer.done(fn1,fn2);jq中的promise中可以添加多个方法一次*/

/* for ( var i = 0, elem; (elem = this[i]) != null; i++ ) { */

	/*html属性与dom属性*/

		/*dom上的一些数据被保存在jq中的某个对象上，来避免内存泄露*/

		/*绑定一个事件，来管理所有的事件*/


		/*dom上拿数据标识，标识里拿dom所有data。从data中拿到hander对象。 根据 type创建 不同的数组。
		* 修复event。绑定特定类型的事件 */