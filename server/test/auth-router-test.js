'use strict';

require('./lib/mock-env.js');

const {expect} = require('chai');
const superagent = require('superagent');
const serverControl = require('./lib/server-control.js');
const baseURL = process.env.API_URL;

describe('testing auth router', function(){
  before(serverControl.start);
  after(serverControl.stop);

describe('testing GET /api/login', function() {
  it('should respond with a token and status of 200', (done) => {
    superagent.get(`${baseURL}/api/login`)
    .auth('notslugbyte@notslugbyte.com', 'goodbyemoon')
    .then(res => {
      console.log('token', res.text);
      expect(res.status).to.equal(200);
      expect(!!res.text).to.equal(true);
      done();
    })
    .catch(done);
  });

it('should return 401', (done) => {
  superagent.get(`${baseURL}/api/login`)
  .then(done)
  .catch(res => {
    expect(res.status).to.equal(401);
    done();
  })
  .catch(done);
});

it('should return 401', (done) => {
  superagent.get(`${baseURL}/api/login`)
  .auth('', 'blarg')
  .then(done)
  .catch(res => {
    expect(res.status).to.equal(401);
    done();
  })
  .catch(done);
});

it('should return 401', (done) => {
  superagent.get(`${baseURL}/api/login`)
  .auth('blarg', '')
  .then(done)
  .catch(res => {
    expect(res.status).to.equal(401);
    done();
  })
  .catch(done);
});

it('should return 401', (done) => {
  superagent.get(`${baseURL}/api/login`)
  .auth('notslugbyte@notslugbyte.com','correct')
  .then(done)
  .catch(res => {
    expect(res.status).to.equal(401);
    done();
  })
  .catch(done);
});
});
});
