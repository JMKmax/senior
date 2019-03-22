/*
* @Author: jing
* @Date:   2019-03-22 10:06:00
* @Last Modified by:   jing
* @Last Modified time: 2019-03-22 10:12:38
*/
const fs = require('fs');
const util = require('util')
/*
fs.readFile('./01.txt',{flag:'r'},(err,data)=>{
	if(err){
		console.log('read err',err)
	}else{
		console.log(data)
	}
})
*/
/*   //promise方法
const readFile = util.promisify(fs.readFile);
readFile('./01.txt',{flag:'r'})
.then(data=>{
	console.log(data)
})
*/
const readFile = util.promisify(fs.readFile);
async function callReadFile(){
	let data = await readFile('./01.txt',{flag:'r'})
	return data
}
callReadFile()
.then(data=>{
	console.log(data)
})
