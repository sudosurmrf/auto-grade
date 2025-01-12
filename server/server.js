require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/index.js');

const app = express();
app.use(express.json());
// const corsOptions = { origin: 'http://localhost:5173'};
// app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/static', express.static(path.join(__dirname, 'projects')));
app.use('/api', apiRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
