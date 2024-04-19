const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');

// Define the POST route for transferring money
router.post('/', transferController.transferMoney);

module.exports = router;
