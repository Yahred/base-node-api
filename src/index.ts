import express from 'express';
import 'dotenv/config'

import conectarDB from './db/conectarDB.js';
import enrutar from './router.js';


const app = express();

const { PORT } = process.env;

enrutar(app);

try {
  await conectarDB();
  console.log('Conexión establecida')
} catch (error) {
  console.log('Error de conexión', error.message);
}

app.listen(PORT, () => console.log(`Servicio iniciado en el puerto: ${PORT}`));

export default app;
