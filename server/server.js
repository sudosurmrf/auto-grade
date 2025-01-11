require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/index.js');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/static', express.static(path.join(__dirname, 'projects')));
app.use('/api', apiRoutes);

app.listen(PORT || 3000, () => {
  console.log(`Server listening on port ${PORT}`);
});
