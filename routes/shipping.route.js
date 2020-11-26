const express = require('express');
const router = express.Router();
const { homeController, generateController } = require('../modules/shipping/controllers');

router.get('/', homeController);
router.post('/', generateController);

module.exports = router;