module.exports = io => {
  io.on('connection', socket => {
    console.log('connected!');
    socket.on('counter', () => {
        io.emit('counter', 1);
    });
  });
};