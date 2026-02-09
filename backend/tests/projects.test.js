const request = require('supertest');
const app = require('../app');

describe('Projects routes', () => {
  it('POST /api/projects returns created stub', async () => {
    const response = await request(app).post('/api/projects').send({});
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Create project stub');
  });

  it('GET /api/projects returns list stub', async () => {
    const response = await request(app).get('/api/projects');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('List projects stub');
  });
});
