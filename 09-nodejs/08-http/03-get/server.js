/*
* @Author: jing
* @Date:   2019-03-24 09:57:54
* @Last Modified by:   jing
* @Last Modified time: 2019-03-25 16:49:30
*/
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
	
	console.log('url=>',req.url,'method=>',req.method);// /?username=xx&age=34

	//解析url
	/*
	const myUrl1 = url.parse(req.url);
	console.log(myUrl1.query);//'username=xx&age=34'
	const obj1 = querystring.parse(myUrl1.query);
	console.log(obj1);
	*/
	const myUrl2 = url.parse(req.url,true);
	console.log(myUrl2);
	const obj2 = myUrl2.query;
	console.log(obj2);

	res.setHeader('Content-Type',"text/html;charset=utf-8");
	res.end('kuazhu');
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})
