import normalize from 'normalize-mongoose';
import { Schema, model } from 'mongoose';

import { IUsuario } from '../interfaces/index.js';

const usuarioSchema = new Schema<IUsuario>({
  usuario: {
    required: true,
    type: String,
  },
});

usuarioSchema.plugin(normalize);

const Usuario = model<IUsuario>('Usuario', usuarioSchema);

export default Usuario;
