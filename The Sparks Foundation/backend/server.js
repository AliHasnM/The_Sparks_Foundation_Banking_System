const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
// require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const customerRoutes = require('./routes/customerRoutes');
const transferRoutes = require('./routes/transferRoutes');
app.use('/api/customers', customerRoutes);
app.use('/api/transfers', transferRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
