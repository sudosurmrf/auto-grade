const express = require('express');
const router = express.Router();
const debugRoutes = require('./debugRoutes.js');
const graderRoutes = require('./graderRoutes.js');
const fileStructureRoutes = require('./fileStructureRoutes.js');


router.use('/clone-logs', debugRoutes);
router.use('/grade', graderRoutes);
router.use('/file-structure', fileStructureRoutes);

module.exports = router;