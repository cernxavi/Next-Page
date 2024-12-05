const forceDatabaseRefresh = false;


import express from 'express';

import routes from './routes/index.js';
import { sequelize } from './models/index.js';

//set up the express app
const app = express();
const PORT = process.env.PORT || 3001;
console.log(`PORT environment variable: ${process.env.PORT}`);

app.use(express.static('../../Client/dist'));
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
