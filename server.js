const app = require('./app')
const https = require('http')
const socketio = require('socket.io')
require('dotenv').config()
/**
 * Testing docs
 */
const server = https.createServer(app)
const io = socketio(server)
const fs = require('fs');



io.on("connection", socket => {
  console.log("New client connected")
  
  socket.on("disconnect", () => console.log("Client disconnected"));
})




https.createServer(app).listen(process.env.HTTP_PORT,()=>{
  console.log("HTTP is running on port 3000!")
})
