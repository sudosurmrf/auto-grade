const express = require('express');
const router = express.Router();
const { store } = require('../store');

// /clone-logs
router.get('/', (req, res) => {
  res.json(store.getState().clone.logs);
});

module.exports = router;
