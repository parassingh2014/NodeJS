// const express = require('express')
const http = require('http')
console.log("Express")

const server = http.createServer((req, resp) => {
console.log('Test')
resp.end('Headers and body have been sent')
}).listen(5000)