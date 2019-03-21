/*
* @Author: jing
* @Date:   2019-03-21 19:29:40
* @Last Modified by:   jing
* @Last Modified time: 2019-03-21 19:53:39
*/
const fs = require('fs');
/*
const fd = fs.openSync('./01.txt','w');
fs.writeSync(fd,'kuazhu')
fs.closeSync(fd)
*/
fs.writeFileSync('./01.txt','hello',{flag:'a'})