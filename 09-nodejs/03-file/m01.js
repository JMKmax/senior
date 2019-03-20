/*
* @Author: jing
* @Date:   2019-03-19 20:12:51
* @Last Modified by:   jing
* @Last Modified time: 2019-03-20 09:01:21
*/
const obj = {
	name:'Tom',
	age:18
}
const str = 'hello';
const fn = ()=>{
	console.log('fn....')
}
/*
exports.obj = obj;
exports.str = str;
exports.fn = fn;
console.log(exports);
console.log(module.exports)
*/
/*
module.exports.obj = obj;
module.exports.str = str;
module.exports.fn = fn;
console.log(module.exports);
console.log(exports)
*/
module.exports = {
	obj,
	fn,         //此时，module.exports指向已经与exports不同，所以
	str			//在exports上添加属性时不能同步到exports上了，下面的arr无法再导出
}
exports.arr = [11,22,33]