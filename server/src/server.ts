const forceDatabaseRefresh = false;


import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

// set the file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//set up the express app
const app = express();
const PORT = process.env.PORT || 3001;
console.log(`PORT environment variable: ${process.env.PORT}`);

app.use(express.static('../../Client/dist'));

app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist', 'index.html'));
});
// import path from 'path';
// app.use(express.static(path.resolve(__dirname, '../../Client/dist')));

app.use(express.json());
app.use(routes)

app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
  });
});
