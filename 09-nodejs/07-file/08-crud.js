/*
* @Author: jing
* @Date:   2019-03-22 19:07:32
* @Last Modified by:   jing
* @Last Modified time: 2019-03-25 15:28:37
*/
const fs = require('fs');
const util = require('util');

const file = './data.json';
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
/*
let add =(name,callback)=>{
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
			fs.writeFile(file,strArr,(err)=>{
				if(err){
					callback(err)
				}else{
					callback(null,arr)
				}
			})
		}
	})
}
add('tom',(err,data)=>{
	if(err){
		console.log(err)
	}else{
		console.log(data)
	}
})
*/
async function add(name){
	let data = await readFile(file);
	let arr = JSON.parse(data);
	arr.push({
		id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
		name:name
	});
	let strArr = JSON.stringify(arr);
	await writeFile(file,strArr);
	return arr;
};
async function get(id){
	let data = await readFile(file);
	let arr = JSON.parse(data);
	return arr.find(val=>{
		return val['id'] == id;
	})
};
async function updata(id,name){
	let data = await readFile(file);
	let arr = JSON.parse(data);
	let obj = arr.find(val=>{
		return val['id'] == id;
	});
	if(obj){
		obj.name = name;
		let strArr = JSON.stringify(arr);
		await writeFile(file,strArr);
		return arr;
	}else{
		return obj;
	}
};
async function remove(id){
	let data = await readFile(file);
	let arr = JSON.parse(data);
	let newArr = arr.filter(val=>{
		return val['id'] != id;
	});
	let strArr = JSON.stringify(newArr);
		await writeFile(file,strArr);
		return newArr;
}
add('Leo')
.then(data=>{
	console.log(data)
})