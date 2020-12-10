'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe ('web server', () => {
    it('Should respond with 404 status on an invalid route', () => {
        return mockRequest
          .get('/blah')
          .then(result => {
            expect(result.status).toBe(404);
          })
          //.catch(err => console.error(err));
      })
    
      it('Should respond with 500 status on a server error thrown', () => {
        return mockRequest
          .put('/artists')
          .then(result => {
            expect(result.status).toBe(500);
          })
          //.catch(err => console.error(err));
      })
      
})
