const express = require('express');
const router = express.Router();
const debugRoutes = require('./debugRoutes.js');
const graderRoutes = require('./graderRoutes.js');


router.use('/clone-logs', debugRoutes);
router.use('/grade', graderRoutes);

module.exports = router;