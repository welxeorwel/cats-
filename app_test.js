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
    colors: ['black', 'white'],
}

const TiriReview = {
    header: 'I just can\'t get enough of this cat!',
    contents: 'She is the cutest fucking cat around, so so sweet, wow, what a cat!!'
}

chai.use(chaiHttp);
//Our parent block
describe('Cats', () => {
    beforeEach(async () => {
        await app.db.clear();
    })

/*
  * Test the GET /
  */
  describe('GET /', () => {
      it('it should return hello world', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
      });
  });


  describe('Get /api/cats', () => {
    it('should return a list of cats', async () => {
       await app.db.addCat(Tiri);

        chai.request(app)
        .get('/api/cats')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.eql([Tiri]);
        });
    })
  })

  describe('POST /api/cats', () => {
    it('should add a cat to the list', async () => {
        
        chai.request(app)
        .post('/api/cats')
        .send(Tiri)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.eql({status: 'ok'});
        });

        chai.request(app)
        .get('/api/cats')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.eql([Tiri]);
        });
    })
  })

  describe('GET /api/cats/:id', () => {
    it('should show the cat', async () => {
        await app.db.addCat(Tiri);

        chai.request(app)
        .get('/api/cats/tiri')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.eql(Tiri);
        });

        chai.request(app)
        .get('/api/cats/onixia')
        .end((err, res) => {
            res.should.have.status(404);
            res.body.should.eql({status: 'not found'});
        });
    })
  })

  describe('GET /api/cats/:id/reviews', () => {
    it('should show the cat review', async () => {
        await app.db.addCat(Tiri);
        await app.db.addReview(Tiri.name,TiriReview);

        chai.request(app)
        .get('/api/cats/tiri/reviews')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.eql([TiriReview]);
        });

        chai.request(app)
        .get('/api/cats/onixia/reviews')
        .end((err, res) => {
            res.should.have.status(404);
            res.body.should.eql({status: 'not found'});
        });
    })
  })

  describe('POST /api/cats/:id/reviews', () => {
    it('should add review of the cat', async () => {
        await app.db.addCat(Tiri);
        chai.request(app)
        .post('/api/cats/tiri/reviews')
        .send(TiriReview)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.eql({status: 'ok'});
        });

        chai.request(app)
        .get('/api/cats/tiri/reviews')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.eql([TiriReview]);
        });    
    })
  })
});