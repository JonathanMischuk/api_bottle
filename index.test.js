const request = require('supertest');
const { app, server } = require('./index');

afterAll(() => {
    server.close();
});

test('GET / - hello-s world', done => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Hello World!')
        .then(done);
});
