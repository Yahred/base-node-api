import { Router } from 'express';

import Usuario from '../models/Usuario.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    return res.status(200).send(usuarios);
  } catch (error) {
    return res.status(500).send(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const { body: usuario } = req;
    const usuarioBd = await Usuario.create(usuario);
    return res.status(200).send(usuarioBd);
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
