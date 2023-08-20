import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../index.js';

describe('Usuarios', () => {

  it('it should create a Usuario', (done) => {
    chai.use(chaiHttp)

    const body = {
      usuario: 'Usuario test',
      password: '123',
    };

    chai
      .request(server)
      .post('/api/v1/usuarios')
      .set('content-type', 'application/json')
      .send(body)
      .end((error) => {
        if (error) return done(error);
        done();
      });
  });
});
