const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.PORT || 8080 });

wss.on('connection', function connection(ws) {
    console.log("Usuario conectado");

    ws.on('message', function incoming(message) {
        console.log('received: %s %s', message, Date.now());
    });
    ws.send('Recibido:', Date.now);
});