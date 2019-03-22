/*
* @Author: jing
* @Date:   2019-03-22 10:26:11
* @Last Modified by:   jing
* @Last Modified time: 2019-03-22 10:36:42
*/
const fs = require('fs');
const ws = fs.createWriteStream('./ws.txt');
const rs = fs.createReadStream('./01.txt');
/*
ws.on('finish',()=>{
	console.log('finish...')
})
ws.on('open',()=>{
	console.log('ws open')
})
ws.on('close',()=>{
	console.log('ws close')
})
ws.write('hell0');
ws.write('JMk');
ws.end();
rs.on('open',()=>{
	console.log('rs open')
})
rs.on('close',()=>{
	console.log('rs close')
})
rs.on('data',data=>{
	console.log(data)
})
rs.on('end',()=>{
	console.log('rs end')
})
*/
rs.pipe(ws);