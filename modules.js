// Export Module in node.js
const names = require('./extract.js');
console.log(names)


const os = require('os')

//User info

console.log(os.UserInfo().UserInfo)

//Object creation

const currentOs = {
    name : os.type(),
    release : os.release

}

console.log(currentOs)

//Path module
const path = require('path')

const pathData = {name : path.sep}
console.log(pathData)

//FS
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8', (err, result) =>{

})
console.log(first)
// const writeFile = writeFileSync('./content/Second.txt', 'Second Data')

//Async
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})