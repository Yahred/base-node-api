import cors from 'cors';
import { Express, json } from 'express';

import usuarios from './controllers/usuarios.js'

/**
 * Función que para enrutar los controladores de la aplicación
 * @param app
 */
const enrutar = (app: Express) => {
  app.use(json());
  app.use(cors());

  const endpoint = (resource: string) => `/api/v1/${resource}`

  app.use(endpoint('usuarios'), usuarios);
}

export default enrutar;
