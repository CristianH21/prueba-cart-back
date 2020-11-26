module.exports = ({ settings }) => (req, res, next) => {

    res.sendFile(settings.ROOT_DIR + '/index.html');

}