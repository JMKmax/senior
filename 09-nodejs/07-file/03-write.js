/*
* @Author: jing
* @Date:   2019-03-21 20:05:25
* @Last Modified by:   jing
* @Last Modified time: 2019-03-21 20:33:48
*/
const fs = require('fs');
/*
const fd = fs.open('./01.txt','w',(err,fd)=>{
	if(err){
		console.log('open err'+err)
	}else{
		fs.write(fd,'kuazhu',(err)=>{
			if(err){
				console.log('write err'+ err)
			}else{
				console.log('write success')
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
fs.writeFile('./01.txt','hello',{flag:'a'},(err)=>{
	if(err){
		console.log('write err',err)
	}else{
		console.log('write success')
	}
	
})