'use strict'

const test = require('tape');
const request = require('supertest');
const app = require('../server');

test('greeter', (t) => {
  request(app)
    .get('/greeter?name=Tatiana&title=professor')
    .expect('Content-Type', /json/)
    .expect(200, { welcome_message: `Oh, hi there Tatiana, my dear professor!` })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('greeter', (t) => {
  request(app)
    .get('/greeter?name=Tatiana')
    .expect('Content-Type', /json/)
    .expect(200, { error: `Please provide a title!` })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('greeter', (t) => {
  request(app)
    .get('/greeter?title=professor')
    .expect('Content-Type', /json/)
    .expect(200, { error: `Please provide a name!` })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});