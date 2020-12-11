'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);
//require('@code-fellows/supergoose');

describe('web server', () => {
  /*
  it('Should respond with 404 status on an invalid route', async () => {
    const result = await mockRequest.get('/blah');
    expect(result.status).toBe(404);
  });

  it('Should respond with 404 status on bad method', async () => {
    const result = await mockRequest.post('/artists/2');
    expect(result.status).toBe(404);
  });
*/
  // it('Should respond with 500 status on a server error thrown, such as going to update or delete with no id', async () => {
  //   const result = await mockRequest.put('/artists/');
  //   expect(result.status).toBe(500);
  // });

  //TODO: fix these to work. I had to disable because "supergoose" doesnt seem to be working
  /*
  it('Should respond with 200 status on GET /artists', async () => {
    const result = await mockRequest.get('/artists');
    expect(result.status).toBe(200);
  });

  it('Should add item on POST /artists', async () => {
    // const artistObject = {
    //   name: "Van what",
    //   fromLocation: "NL",
    //   yearBorn: 1153,
    //   yearDied: 1390,
    //   id: 2
    // };
    const result = await mockRequest.post('/artists');
    expect(result.body.id).toEqual(1);
  });

  it('Should respond with 200 status on GET /artists/1', async () => {
    const result = await mockRequest.get('/artists/1');
    expect(result.body.id).toEqual(1);
  });

  /*
  it('Should respond with 200 status on PUT /artists/1', async() => {
    const result = await mockRequest.put('/artists/1');
    expect(result.body.id).toEqual(1);
  });
  
  it('Should respond with 200 status on DELETE /artists/1', async() => {
    const result = await mockRequest.put('/artists/1');
    expect(result.body).toBe([]);
  });
  */
});
