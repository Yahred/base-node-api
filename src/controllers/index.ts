/**
 * In this folder you will define all the controllers for the api endpoints of
 * the app
 *
 * Example
 */

import { Router } from 'express';

const router =  Router();

router.get('/', (req, res) => {
  return res.status(200).send('Hello world');
})

export default router;
