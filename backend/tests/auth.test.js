const request = require('supertest');
const app = require('../app');

describe('Auth routes', () => {
  it('POST /api/auth/signup returns stub response', async () => {
    const response = await request(app).post('/api/auth/signup').send({});
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Signup endpoint stub');
  });

  it('POST /api/auth/login returns stub response', async () => {
    const response = await request(app).post('/api/auth/login').send({});
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login endpoint stub');
  });
});
