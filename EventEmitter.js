var EventEmitter = require('events').EventEmitter;
var event =  new EventEmitter();
event.on('some_event', function() {
  console.log('some_event 事件触发');
})
console.log('开始');
setTimeout(function() {
  event.emit('some_event');
}, 1000)

