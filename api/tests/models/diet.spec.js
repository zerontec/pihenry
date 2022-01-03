const {  Diet, conn } = require('../../src/db.js');
const { expect } = require('chai');


describe('Diet model', () => {
    before(() => conn.authenticate()
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      }));
    describe('Validators', () => {
      beforeEach(() => Diet.sync({ force: true }));
      describe('GET /types', () => {
        it('responds with 200', () => agent.get('/types').expect(200));
        it('responds with and object with message `types`', () =>
          agent.get('/types').then((res) => {
            expect(res.body.message).to.be.equal('types');
          }));
      });|
    });
  });
  