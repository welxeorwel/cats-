//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./app');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
/*
  * Test the GET /
  */
  describe('GET /', () => {
      it('it should return hello world', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.eq("Hello World!")
                done();
            });
      });
  });

});