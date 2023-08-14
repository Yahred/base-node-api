import express from 'express';
import 'dotenv/config';

import enrutar from './router.js';

const app = express();

const { PORT } = process.env;

enrutar(app);

app.listen(PORT, () => console.log(`Servicio iniciado en el puerto: ${PORT}`));
