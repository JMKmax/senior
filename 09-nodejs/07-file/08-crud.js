/*
* @Author: jing
* @Date:   2019-03-22 19:07:32
* @Last Modified by:   jing
* @Last Modified time: 2019-03-22 19:29:40
*/
const = fs = require('fs');
const util = require('util');

const file = './data.json';
const readFile = util.promisify(fs.readFile);
const writeFile = tuil.promisify(fs.writeFile);
const add(name,callback){
	//1.获取原有数据
	fs.readFile(file,(err,data)=>{
		if(err){
			callback(err)
		}else{
			let arr = JSON.parse(data);
			arr.push({
				id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
				name:name
			});
			let strArr = JSON.stringify(arr);
		}
	})
}