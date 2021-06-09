import request from 'supertest'
import app from '../config/app'

describe('Middlewares', () => {
  // it = integracion
  it('Should Body-Parse', async () => {
    const endpoint = '/body-parser';

    app.post(endpoint, (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post(endpoint)
      .send({name: 'Jesus'})
      .expect({name: 'Jesus'})

  })
});