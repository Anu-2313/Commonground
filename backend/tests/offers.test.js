const request = require('supertest');
const app = require('../app');

describe('Offers routes', () => {
  it('POST /api/offers returns created stub', async () => {
    const response = await request(app).post('/api/offers').send({});
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Create offer stub');
  });

  it('GET /api/offers returns list stub', async () => {
    const response = await request(app).get('/api/offers');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('List offers stub');
  });
});
