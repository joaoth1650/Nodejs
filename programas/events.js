const {EventEmitter} = require('events')

const ev = new EventEmitter()
ev.once('saySomething', (message) => {
  console.log('Olá: ', message)
})
ev.emit('saySomething', 'João')
ev.emit('saySomething', 'Jotinha')
