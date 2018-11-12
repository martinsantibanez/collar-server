//https://github.com/websockets/ws
//https://github.com/Links2004/arduinoWebSockets
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4000 });

wss.on('connection', function connection(ws) {
    ws.on( 'hola', function( message ) {
        console.log('Recibi: ', message);
        console.log(ws);
    });
  console.log('Se conecto un weon');
});