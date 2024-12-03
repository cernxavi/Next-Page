const express = require('express');
const app = express();

// Set PORT dynamically via Render, default to 3001 for local development
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
