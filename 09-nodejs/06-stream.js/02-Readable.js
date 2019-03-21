/*
* @Author: jing
* @Date:   2019-03-21 19:01:42
* @Last Modified by:   jing
* @Last Modified time: 2019-03-21 19:25:43
*/
const {Readable} = require('stream');
// console.log(Readable)
class MyRead extends Readable{
	constructor(){
		super();
		this.index = 0;
	}
	_read(){
		this.index++;
		if(this.index>5){
			reader.push(null)
		}else{
			const str = this.index +'';
			reader.push(str)
		}
	}
}
const reader = new MyRead();
reader.on('data',(chunk)=>{
	console.log(chunk);
})