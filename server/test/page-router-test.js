'use strict';

require('./lib/mock-env.js');

const {expect} = require('chai');
const superagent = require('superagent');
const Page = require('../model/page.js');
const serverControl = require('./lib/server-control.js');
let baseURL = process.env.API_URL;

describe('testing page router', function() {
  before(serverControl.start)
  after(serverControl.stop)

  before(done => {
    superagent.get(`${baseURL}/api/login`)
    .auth('irvinedowning@gmail.com', 'yadayadayada')
    .then(res=> {
      this.tempToken = res.text;
      done();
    })
    .catch(done)
  });

  it('should create a note', (done) => {
    superagent.put(`${baseURL}/api/page`)
    .send({
      title: 'samplesample',
      content: 'rock on doodzzzz',
      showInNav: true,
    })
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(res => {
      this.tempPage = res.body;
      expect(res.status).to.equal(200);
      expect(!!res.body.id).to.equal(true);
      expect(res.body.title).to.equal('samplesample');
      expect(res.body.content).to.equal('rock on doodzzzz');
      expect(res.body.showInNav).to.equal(true);
      done();
    })
    .catch(done);
  })

  it('should respond with a 401', (done) => {
    superagent.put(`${baseURL}/api/page`)
    .send({
      title: 'samplesample',
      content: 'rock on doodzzzz',
      showInNav: true,
    })
    .then(done)
    .catch(res => {
      expect(res.status).to.equal(401);
      done();
    })
    .catch(done);
  });

  it('should respond with a 400', (done) => {
    superagent.put(`${baseURL}/api/page`)
    .send({ title: 'samplesample', showInNav: true})
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(done)
    .catch(res => {
      expect(res.status).to.equal(400)
      done();
    })
    .catch(done);
  })
  it('should respond with a 200 and an array of pages', (done) => {
    superagent.get(`${baseURL}/api/page`)
    .then(res => {
      expect(res.status).to.equal(200);
      expect(Array.isArray(res.body)).to.equal(true);
      done();
    })
    .catch(done);
  });

  it('should update the page', (done) => {
    this.tempPage.title = 'nopenope';
    superagent.put(`${baseURL}/api/page`)
    .send(this.tempPage)
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(res => {
      this.tempPage = res.body;
      expect(res.status).to.equal(200);
      expect(!!res.body.id).to.equal(true);
      expect(res.body.title).to.equal('nopenope');
      expect(res.body.content).to.equal('rock on doodzzzz');
      expect(res.body.showInNav).to.equal(true);
      done();
    })
    .catch(done);
  });

  it('should respond with a 401 error', (done) => {
    superagent.delete(`${baseURL}/api/page/${this.tempPage.id}`)
    .then(done)
    .catch(res => {
      expect(res.status).to.equal(401);
      done();
    })
    .catch(done);
  });

  it('should delete the page', (done) => {
    superagent.delete(`${baseURL}/api/page/${this.tempPage.id}`)
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(res => {
      expect(res.status).to.equal(204);
      done();
    })
    .catch(done);
  });

});
