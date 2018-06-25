'use strict'

const test = require('tape');
const request = require('supertest');
const app = require('../server');

test('doubling', (t) => {
  request(app)
    .get('/doubling')
    .expect('Content-Type', /json/)
    .expect(200, { error: 'Please provide an input!'})
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('doubling', (t) => {
  request(app)
    .get('/doubling?input=5')
    .expect('Content-Type', /json/)
    .expect(200, { received: 5, result: 10})
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
