const express = require('express');
const router = express.Router();
const app = express();


app.use('/clone-logs', './debugRoutes.js');
app.use('/grade', './graderRoutes.js');

module.exports = router;