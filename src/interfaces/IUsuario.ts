import { IModel } from './IModel.js';

export interface IUsuario extends IModel {
  usuario: string;
  password: string;
}
