const express = require('express');
const BuiltinMiddleware = require('./middleware/BuiltinMiddleware');
const ApplicationLevelMiddleware = require('./middleware/ApplicationLevelMiddleware');

const app = express();
const PORT = 3000;

// Use built-in middleware
app.use(BuiltinMiddleware);

// Use application-level middleware
app.use(ApplicationLevelMiddleware);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
