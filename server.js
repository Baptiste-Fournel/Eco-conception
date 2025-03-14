const http = require('http');
const app = require('./app.js');

const port = 3000;

const server = http.createServer();

server.on('listening', () => {
    console.log('Server running on port : '+ port);
});
server.listen(port);
