require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
<<<<<<< HEAD
const APP_PORT = process.env.PORT || 5000;

const server = app.listen(APP_PORT, () => {
    console.log(`App running on port 5000`);
=======
const Push = require('push.js');

const APP_PORT = process.env.PORT || 5000;
const server = app.listen(APP_PORT, () => {
    console.log(`App running on port ${APP_PORT}`);
>>>>>>> 58603ea9023e25db9dd583555e78c7433624a761
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
    console.log('TEST : ', message)
    console.log('TEST : ', message)
})

<<<<<<< HEAD
=======
app.get('/test', (req, res) => {
    Push.create('Hello World!');
})
>>>>>>> 58603ea9023e25db9dd583555e78c7433624a761
