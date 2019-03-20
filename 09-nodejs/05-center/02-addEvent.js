/*
* @Author: jing
* @Date:   2019-03-20 20:38:29
* @Last Modified by:   jing
* @Last Modified time: 2019-03-20 20:45:00
*/
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();

emitter.setMaxListeners(6);

emitter.on('text',()=>{
	console.log('running text ...')
});
emitter.on('text',()=>{
	console.log('running text ...')
});
emitter.on('text',()=>{
	console.log('running text ...')
});
emitter.on('text',()=>{
	console.log('running text ...')
});
emitter.addListener('text',()=>{
	console.log('running add text ...')
})
emitter.once('text',()=>{
	console.log('running once text ...')
});
console.log(emitter.on === emitter.addListener)
emitter.emit('text')
//emitter.emit('text')