const settings = require('../../../settings');
const { generateHandler } = require('../handlers');

const makeHomeController = require('./home.controller');
const makeGenerateController = require('./generate.controller');

const homeController = makeHomeController({ settings });
const generateController = makeGenerateController({ generateHandler });

module.exports = Object.freeze({
    homeController,
    generateController
});