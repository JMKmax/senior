/*
* @Author: jing
* @Date:   2019-03-21 20:34:05
* @Last Modified by:   jing
* @Last Modified time: 2019-03-22 10:03:58
*/
const fs = require('fs');
/*
fs.open('./01.txt','r',(err,fd)=>{
	if(err){
		console.log('open err',err)
	}else{
		let buf = Buffer.alloc(100)
		fs.read(fd,buf,0,100,0,(err)=>{
			if(err){
				console.log('read err',err)
			}else{
				console.log(buf)
			}
			fs.close(fd,(err)=>{
				if(err){
					console.log('close err'+ err)
				}else{
					console.log('close success')
				}
			})
		})
	}
})
*/
fs.readFile('./01.txt',{flag:'r'},(err,data)=>{
	if(err){
		console.log('read err',err)
	}else{
		console.log(data)
	}
})