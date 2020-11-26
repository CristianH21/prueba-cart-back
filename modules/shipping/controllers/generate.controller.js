module.exports = ({ generateHandler }) => async (req, res, next) => {

    const data = await generateHandler();

    const statusCode = data.hasOwnProperty('error') ? 500 : 200;

    res.status(statusCode).json(data);

}