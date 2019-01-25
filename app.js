const express = require('express');
const path = require('path');
const app = express();
const Push = require('push.js');


const server = app.listen(5000, () => {
    console.log(`App running on port 5000`);
})
const io = require('socket.io').listen(server);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('chatter', (message) => {
        console.log('chatter : ', message)
        io.emit('chatter', message)

        console.log('chatter : ', message)
    })
})


app.get('/test', (req, res) => {
    Push.create('Hello World!');
})
