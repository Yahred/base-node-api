import cors from 'cors';
import { Express, json } from 'express';

/**
 * Función que para enrutar los controladores de la aplicación
 * @param app
 */
const enrutar = (app: Express) => {
  app.use(json());
  app.use(cors());

}

export default enrutar;
