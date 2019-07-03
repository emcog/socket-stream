const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});




io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('disconnect', () => {
        console.log('a user disconnected');
    });
    
    socket.on('user-server', (data) => {
        console.log('data:', data);
    });
        
    socket.on('button', (data) => {
        console.log('data', data);
    });
});
        
        
server.listen(3000);