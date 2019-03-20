/*
* @Author: jing
* @Date:   2019-03-20 20:14:27
* @Last Modified by:   jing
* @Last Modified time: 2019-03-20 20:17:31
*/
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();
console.log(emitter);
emitter.on('text',()=>{
	console.log('running text ...')
})
emitter.emit('text')