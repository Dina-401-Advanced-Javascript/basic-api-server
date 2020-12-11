'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const logger = require('../src/middleware/logger');

describe('logger middleware', () => {

  //callback that checks that logger is doing the right thing
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); //spy on the next method, built into the jest framework

  //this code is to set up the spy, and you can copy/paste it 
  beforeEach(() => {
    // Attach to the console
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    //put the console back
    consoleSpy.mockRestore();
  });

  it('properly logs some output', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

});
