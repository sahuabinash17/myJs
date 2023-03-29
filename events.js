//Events Module {on,click.....}
//NodeJs has an built-in module called "events" 
//where we can listen-, fire- ,create- our own events

const EventEmitter = require('events');
 
const event = new EventEmitter();
 
event.on("sayMyName", () =>{
 console.log("The Next Door is waiting for you")
})

event.on("sayMyName", ()=>{
    console.log("No One Push You")
});
event.on("sayMyName",(statusCode,message)=>{
    console.log(`the statusCode is ${statusCode} -- and the message is ${message}`)
})

event.emit("sayMyName",200,"ok"); 




