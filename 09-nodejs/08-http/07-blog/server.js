/*
* @Author: jing
* @Date:   2019-03-26 10:48:19
* @Last Modified by:   jing
* @Last Modified time: 2019-03-26 14:41:09
*/
const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');


const mime = require('./mime');

const server = http.createServer((req,res)=>{
	console.log('url=>',req.url);
	let reqUrl = url.parse(req.url,true);
	console.log(reqUrl)
	let pathname = reqUrl.pathname;
	if(pathname.lastIndexOf('.') == -1){
		pathname = pathname+'/index.html';
	}
	let filePath = path.normalize(__dirname+'/static/'+pathname);
	let extname = path.extname(filePath);
	console.log(filePath)
	console.log(extname);
	fs.readFile(filePath,(err,data)=>{
		if(err){
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.end('出错了')
		}else{
			res.setHeader('Content-Type',mime[extname]+";charset=utf-8");
			res.end(data);
		}
	})
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})