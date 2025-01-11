const express = require('express');
const router = express.Router();
const graderController = require('../controllers/graderController');

// /grade
router.post('/', graderController.gradeRepo);

module.exports = router;
