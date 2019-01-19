const express = require('express');
const path = require('path');
const app = express();
const APP_PORT = 5000 || process.env.PORT;

const server = app.listen(APP_PORT, () => {
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
    })
  })

