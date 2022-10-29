//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./app');
let should = chai.should();


const Tiri = {
    name: 'Tiri',
    age: 12,
    color: ['black', 'white'],
}

chai.use(chaiHttp);
//Our parent block
describe('Cats', () => {
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


  describe('Get /api/cats', () => {
    it('should return a list of cats', (done) => {
        chai.request(app)
        .get('/api/cats')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.eql([Tiri]);
            done();
        });
    })
  })
});