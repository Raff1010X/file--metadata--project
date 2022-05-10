const express = require('express');
const fileanalyseController = require('../controllers/fileanalyseController');

const router = express.Router();

router.route('/fileanalyse').post(fileanalyseController.getFileanalyse);

module.exports = router;
