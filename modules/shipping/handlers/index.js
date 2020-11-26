const settings = require('../../../settings');
const axios = require('axios');
const makeGenerateHandler = require('./generate.handler');

// const axios = Axios.create({
//     baseURL: `${settings.BASE_URL}/ship`,
//     headers: {'Authorization': 'Bearer 3081a84b0a9b482a452cfe074e94f62ca4b9553554cd75caaef23f5992cec5b8'}
// });

const generateHandler = makeGenerateHandler({ axios, settings });

module.exports = Object.freeze({
    generateHandler
});