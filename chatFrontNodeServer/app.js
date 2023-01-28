const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const moment = require("moment");
const server = http.createServer(app);

const sockerIO = require("socket.io");
const io = sockerIO(server);

app.use(express.static(path.join(__dirname, "src"))); //현재 폴더 + src
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
