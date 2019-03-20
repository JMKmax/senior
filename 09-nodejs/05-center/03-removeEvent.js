/*
* @Author: jing
* @Date:   2019-03-20 20:59:35
* @Last Modified by:   jing
* @Last Modified time: 2019-03-20 21:01:29
*/
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();
const fn1 = ()=>{
	console.log('running text ...')
}
emitter.on('text',fn1)
// emitter.off('text',fn1)
emitter.emit('text')