/*
* @Author: jing
* @Date:   2019-03-20 19:46:23
* @Last Modified by:   jing
* @Last Modified time: 2019-03-20 19:54:58
*/
const bfr1 = Buffer.from('hello');
console.log(bfr1)  //<Buffer 68 65 6c 6c 6f>
const bfr2 = Buffer.from('你好啊');
console.log(bfr2);
const bfr3 = Buffer.alloc(5);
console.log(bfr3)
bfr3[0] = 0x68;
bfr3[1] = 0x65;
bfr3[2] = 0x6c;
bfr3[3] = 0x6c;
bfr3[4] = 0x6f;
console.log(bfr3.toString());