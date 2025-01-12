const express = require('express');
const router = express.Router();
const graderController = require('../controllers/graderController');
const app = express();

app.use(express.json());

// /grade
router.post('/', graderController.gradeRepo);

module.exports = router;
