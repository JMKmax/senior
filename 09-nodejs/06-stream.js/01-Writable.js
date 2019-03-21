/*
* @Author: jing
* @Date:   2019-03-21 18:28:19
* @Last Modified by:   jing
* @Last Modified time: 2019-03-21 18:46:09
*/
const {Writable} = require('stream');

class MyWriter extends Writable{
	_write(chunk,enconding,callback){
		console.log(chunk)
	}
};
const writer = new MyWriter();
writer.on('finish',()=>{
	console.log('hello')
})
writer.write('hello');
writer.end()