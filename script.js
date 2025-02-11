const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const PORT = 3001;

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});

server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});