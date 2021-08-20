'use strict';

const server = require('../src/server.js');
const data = require('../src/models/index.js');
const supertest = require('supertest');


const request = supertest(server.app);

// the below code chunk was borrowed from Jacob Knaack from Code Fellows in order to create temporary tables and pass tests
beforeAll(async () => {
  await data.db.sync();
});
afterAll(async () => {
  await data.db.drop();
});


// === === tests below === === //

describe('testing the server', () => {

  // === === 404 on a bad route === === //
  test('testing 404 on a bad route', async () => {
    const response = await request.get('/badroute');
    expect(response.status).toEqual(404);
  });


  // === === 404 on a bad method === === //
  test('testing 404 on a bad method', async () => {
    const response = await request.put('/services');
    expect(response.status).toEqual(404);
  });



  test('testing a 200 for GET `/services`', async () => {
    const response = await request.get('/services');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  test('testing a 200 for GET `/user`', async () => {
    const response = await request.get('/user');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });


  test('testing a 200 for POST `/services`', async () => {
    const response = await request.post('/services').send({
      name: 'test',
      price: 10,
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });


  test.skip('testing a 200 for POST `/user`', async () => {
    const response = await request.post('/user').send({
      name: 'user test',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('user test');
  });



  // === === tests GET '/car/:carId === === //
  test('testing a 200 for GET `/services/:id`', async () => {
    const response = await request.get(`/services/1`);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test')
  });

  // === === tests GET '/food/:foodId === === //
  test.skip('testing a 200 for GET `/user/:id`', async () => {
    const response = await request.get(`/food/1`);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('user test')
  });



  // === === tests PUT for car === === //
  test.skip('testing a 200 for PUT `/user/:id`', async () => {
    const response = await request.put(`/user/1`).send({
      name: 'testing again',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('testing again');
  });

  // === === tests PUT for food === === //
  test.skip('testing a 200 for PUT `/services/:id`', async () => {
    const response = await request.put(`/services/1`).send({
      name: 'testing again',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('testing again');
  });



  // === === DESTROYS a record for car === === //
  test('testing a 200 for DELETE `/services/:id`', async () => {
    const response = await request.delete(`/services/1`);

    expect(response.status).toEqual(204);
  });

  // === === DESTROYS a record for food === === //
  test.skip('testing a 200 for DELETE `/user/:id`', async () => {
    const response = await request.delete(`/user/1`);

    expect(response.status).toEqual(204);
  });
});