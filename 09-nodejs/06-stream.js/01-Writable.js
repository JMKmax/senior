/*
* @Author: jing
* @Date:   2019-03-21 18:28:19
* @Last Modified by:   jing
* @Last Modified time: 2019-03-22 10:30:48
*/
const {Writable} = require('stream');

class MyWriter extends Writable{
	_write(chunk,enconding,callback){
		console.log(chunk)
	}
};
const writer = new MyWriter();
writer.on('finish',()=>{
	console.log('bye');
})
writer.write('hello');
writer.write('lala');
writer.end()