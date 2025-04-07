
//Event loop offloads some time onuming business and run all other operations.  invoke the callback

//Async Patterns
const util = require('util')
const readFileProm = util.promisify(readFile)
const writeFileProm = util.promisify(writeFile)
const {readFile, writeFile} = require('fs')
//1. Callbacks
const getText = (path) =>{
    console.log('Reading file...', path)
    return new Promise((resolve, reject)  => {
        readFile(path, 'utf8', (err, data) =>{
if(err){
    reject(err)
}
    else{
        resolve(data)
    
}
})
    })
}
//2. Promises
getText('./content/first.txt')
.then(res=> console.log(res))
.catch(ex=> console.log(ex))

//3. Async/Await
const getTextAsy = (path) =>{
    console.log('Reading file...', path)
    return new Promise((resolve, reject)  => {
        readFile(path, 'utf8', (err, data) =>{
if(err){
    reject(err)
}
    else{
        resolve(data)
    
}
})
    })
}


// Call
const start = async() =>{
    const value = await getText('./content/first.txt')
    const value2 = await getText('./content/second.txt')
}
start()

getTextAsy('./content/first.txt')
.then(res=> console.log(res))
.catch(ex=> console.log(ex))
//4. Generators
//5. Observables


getText = (param) =>{
    return new Promise((resolve, ss) => {
readFile('','utf8', (err, res) => {
    if(err){
        ss(err)}
        else{resolve(err)}
})
    })
}
getText('').then().catch()



//Events : Imp
var event = require('events')
var eventEmit = event.EventEmitter()

var funcHandler = () => {
    console.log('Event Fired')
}
eventEmit.on('event', funcHandler)
eventEmit.emit('event')