// const express = require('express')
const http = require('http')
const {readFileSync} = require('fs')
//console.log("Express")

const homePage = readFileSync('./index.html')

const server = http.createServer((req, resp) => {
    //console.log(req.url)
if(req.url === '/'){
    resp.writeHead(200, {'content-type' : 'text/html'})
 resp.write(homePage)

resp.end('Headers and body have been sent')
}
else{
 resp.writeHead(400, {'content-type' : 'text/html'})
 resp.write("Error")
 resp.end()
}
   
}).listen(5001)