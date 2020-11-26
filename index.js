const app = require('./app');
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const connectedListener = require('./listeners/connection.listener');

const PORT = process.env.PORT || 5000;

connectedListener(io);

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


