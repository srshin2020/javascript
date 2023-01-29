const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const moment = require('moment');
const bodyParser = require('body-parser');
const server = http.createServer(app);

const sockerIO = require('socket.io');
const io = sockerIO(server);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'src'))); //현재 폴더 + src
const PORT = process.env.PORT || 5000;

app.get('/api/rooms', (req, res) => {
    console.log('GET rooms api');
    res.json([
        {
            roomId: 1,
            members: ['이수미', '김하나', '바다'],
        },
        {
            roomId: 2,
            members: ['김나도', '박찬호'],
        },
    ]);
});

app.post('/api/login', (req, res) => {
    console.log('POST api');
    console.log(req.body);
    const id = req.body.id;
    const pw = req.body.pw;
    res.send({ result: 'OK' });
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chatting', (data) => {
        const newData = Object.assign({}, data);
        console.log(newData);
        io.emit('chatting', newData);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
io.on('connection', (socket) => {});
