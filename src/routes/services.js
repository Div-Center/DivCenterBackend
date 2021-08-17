'use strict';

const express = require('express');

const data = require('../models/index.js');
const router = express.Router();


// === === routers === === //
router.post('/services', create);
router.get('/services', getAll);
router.get('/services/:servicesId', getOne);
router.put('/services/:servicesId', update);
router.delete('/services/:servicesId', remove);


// === === router functions === === //
async function create(request, response) {
  const servicesObject = request.body;
  const servicesData = await data.services.create(servicesObject);

  response.status(200).send(servicesData);
}

async function getAll(request, response) {
  const allServices = await data.services.findAll();

  response.status(200).send(allServices)
}

async function getOne(request, response) {
  const servicesId = request.params.servicesId;
  const singleServices = await data.services.findOne({
    where: {
      id: servicesId,
    }
  });

  response.status(200).send(singleServices);
}

async function update(request, response) {
  const servicesId = request.params.servicesId;
  const servicesObject = request.body;
  const servicesData = await data.services.findOne({ where: { id: servicesId } });
  await servicesData.update(servicesObject);

  response.status(200).send(servicesData);
}

async function remove(request, response) {
  const servicesId = request.params.servicesId;
  await data.services.destroy({ where: { id: servicesId } });

  response.status(204).send('success!');
}

module.exports = router;
