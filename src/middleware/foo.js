'use strict';

const { server } = require('../server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const logger = require('./validator');
const validator = require('./validator');
/*
describe('validator middleware', () => {
    var req = {
        method:"DELETE",
        route:"/artists",
        params: {}
    };
    var res = {};
    var next = jest.fn(); 

    it('Should throw if DELETE is called with no ID', () => {
        expect(validator(req,res,next)).toThrow();
    })
    
    req.method = "PUT"
    it('Should throw if PUT is called with no ID', async() => {
        await expect(validator(req,res,next)).toThrow();
    })
    
    req.params.id=1;
    it('Should throw if PUT is called with no ID', async() => {
        await expect(validator(req,res,next)).toReturn();
    })
    
});*/