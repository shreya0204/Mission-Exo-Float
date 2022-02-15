// The http is added so that aage we can work better in sockets.
const http = require('http');
const app = require('./app.js');
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(PORT, (error)=>{
    console.log('Listening to PORT : ', PORT, error);
})

