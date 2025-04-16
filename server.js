const express = require('express');
const cors = require('cors');
const { User, Bot } = require('./models/index');
const authRoutes = require('./routes/auth');
const Docker = require('dockerode');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
