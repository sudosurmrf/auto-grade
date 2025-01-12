const express = require('express');
const router = express.Router();
const debugRoutes = require('./debugRoutes.js');
const graderRoutes = require('./graderRoutes.js');
const fileStructureRoutes = require('./fileStructureRoutes.js');
const nested = require('./nested.js');
const app = express();

app.use(express.json());


router.use('/clone-logs', debugRoutes);
router.use('/grade', graderRoutes);
router.use('/file-structure', fileStructureRoutes);
router.use('/nested', nested);

module.exports = router;