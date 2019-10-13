const request = require('supertest');
const { app, server } = require('./index');

describe('API Tests', () => {
    // afterAll(() => {
    //     server.close();
    // });

    it('GET / - hello-s world', done => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', '/json/')
            .expect(200)
            // .expect('Hello World!')
            .then(done)
            .catch(console.error);
    });
});
