const request = require('supertest');
const expect = require('chai').expect;

const app = require('../index');

// describe('GET /airports', function () {
//   it('returns all airports, limited to 30 per page', async function () {
//     const response = await request.get('/airports');

//     expect(response.status).to.eql(200);
//     expect(response.body.data.length).to.eql(30);
//   });
// });

describe('/GET /iecho', () => {
  it('response status 400 if query param  is not  present', (done) => {
    request(app)
      .get('/iecho')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  it('response status 400 if text query param is  not present', (done) => {
    request(app)
      .get('/iecho')
      .query({ hola: 'test' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });

  it('response status 200 if  query param text is present', (done) => {
    request(app)
      .get('/iecho')
      .query({ text: 'test' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('response object containing text: "iset" and pallindrome  :false  query param text = "test" ', (done) => {
    request(app)
      .get('/iecho')
      .query({ text: 'test' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({
        text: 'tset',
        palindrome: false,
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it('response object containing text:"anana" and palindrome:true query param text = "anana" ', (done) => {
    request(app)
      .get('/iecho')
      .query({ text: 'anana' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({
        text: 'anana',
        palindrome: true,
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
