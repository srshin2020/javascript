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
    console.log('a user connected : ', socket.id);
    socket.on('chatting', (data, room) => {
        console.log(`data: ${data.nickname} ${data.message},  room: ${room}`);
        socket.to(room).emit('chatting', data);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('join-room', (id, room) => {
        console.log(`${id} join rooom ${room}`);
        socket.join(room);
        socket.to(room).emit('chatting', {
            nickname: id,
            message: '가 입장하였습니다',
        });
    });
    socket.on('disconnecting', () => {
        socket.rooms.forEach((room) =>
            socket.to(room).emit({
                nickname: 'unknown',
                message: '가 연결이 해제되었습니다.',
            })
        );
    });
    socket.on('leave-room', (id, room) => {
        console.log(`${id} leave rooom ${room}`);
        socket.to(room).emit('chatting', {
            nickname: id,
            message: '가 퇴장하였습니다',
        });
        socket.leave(room);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
