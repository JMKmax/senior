/*
* @Author: jing
* @Date:   2019-03-21 19:01:42
* @Last Modified by:   jing
* @Last Modified time: 2019-03-22 09:52:05
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
			let str = this.index +'';
			reader.push(str)
		}
	}
}
const reader = new MyRead();
/*
let body = '';
reader.on('data',(chunk)=>{
	console.log(chunk.toString());
	body += chunk;
})
reader.on('end',()=>{
	console.log(body);
	console.log('end...')
})
*/
reader.pipe(process.stdout)