const express = require('express');
const router = express.Router();
const { gradeNestedRepo } = require('../controllers/gradeNestedController');

/**
 * POST /api/grade-nested
 * Expects: { repoUrl, nestedFolder, moduleNumber }
 */
router.post('/', gradeNestedRepo);

module.exports = router;
