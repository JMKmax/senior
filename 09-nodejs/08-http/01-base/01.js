/*
* @Author: jing
* @Date:   2019-03-22 19:49:43
* @Last Modified by:   jing
* @Last Modified time: 2019-03-24 09:54:32
*/
const http = require('http');

const server = http.createServer((req,res)=>{
	//req=request 可读流
	//res=response 可写流
	// res.setHeader('Content-Type',"text/plain;charset=utf-8");
	res.setHeader('Content-Type',"text/html;charset=utf-8");
	res.write('<h1>hello</h1>');
	res.end('kuazhu')
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})