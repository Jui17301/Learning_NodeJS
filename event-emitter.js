
const EventEmitter = require("events")
//instance of events
const myEmitter = new EventEmitter()
//listener
myEmitter.on('Birthday',()=>{
  console.log("Happy Birthday")
})
myEmitter.on('Birthday',(gift)=>{
  console.log(`I will send a gift ${gift}`)
})
myEmitter.emit('Birthday','watch')
