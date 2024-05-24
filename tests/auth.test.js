
const request = require('supertest');
const app = require('../server');

describe('POST /auth/login', () => {
    it('should return valid token on successful login', async () => {
        const loginBody = {
            email: 'test@test.com',
            password: 'password123',
        };
        const response = await request(app).post('/auth/login').send(loginBody);

        expect(response.status).toBe(200);
        expect(response.body.token).toBeTruthy();
    });
});

describe('POST /auth/register', () => {
    it('should return 201 on successful registration', async () => {
        const registerBody = {
            name: 'test user',
            email: 'test2@test.com',
            password: 'password123',
        };
        const response = await request(app).post('/auth/register').send(registerBody);

        expect(response.status).toBe(201);
    });
});

describe('POST /auth/logout', () => {
    it('should return 200 on successful logout', async () => {
        const logoutBody = {
            token: 'validToken',
        };
        const response = await request(app).post('/auth/logout').send(logoutBody);

        expect(response.status).toBe(200);
    });
});

