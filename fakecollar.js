const io = require('socket.io-client');

const socket = io('http://localhost:4000');

setInterval(function(){
    var dataEmit = {
        PULSO: randomIntFromInterval(80, 120),
        TEMP: randomIntFromInterval(25, 30)
    }
    socket.emit('MSJ', dataEmit);
}, 1000);

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}