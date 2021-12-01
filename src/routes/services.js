'use strict';

const express = require('express');
const { services } = require('../models/index.js');

const data = require('../models/index.js');
const router = express.Router();


// === === routers === === //
router.post('/services', create);
router.get('/services', getAll);
router.get('/services/:servicesId', getOne);
router.put('/services/:servicesId', update);
router.delete('/services/:servicesId', remove);



// === === router functions === === //
////////////// this is the old CREATE ///////////////////
// async function create(request, response) {
//   const servicesObject = request.body;
//   console.log('🎲services object', servicesObject);
//   const servicesData = await data.services.create(servicesObject);

//   response.status(200).send(servicesData);
// }

async function create(request, response) {
  const servicesObject = request.body;
  const servicesData = await data.services.create(servicesObject);

  response.status(200).send({ success: servicesData, message: servicesData ? 'Created!' : 'Error Creating!' });
}

async function getAll(request, response) {
  const allServices = await data.services.findAll({
    order: [
      // Will escape title and validate DESC against a list of valid direction parameters
      ['id', 'ASC'],]
  });

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
  try {
    const servicesId = request.params.servicesId;
    const servicesObject = request.body;
    const servicesData = await data.services.findOne({ where: { id: servicesId } });
    console.log('services data', servicesData)
    if (!servicesData) {
      throw 'could not find service'
    }
    const res = await servicesData.update(servicesObject);

    response.status(200).send({ success: res, message: res ? 'Updated!' : 'Error Updating!' });

  } catch (error) {
    console.log(error)
    response.status(500).send(error);
  }
}


async function remove(request, response) {

  const servicesId = request.params.servicesId;
  const res = await data.services.destroy({ where: { id: servicesId } });
  // console.log('RES IS', res)

  response.status(200).send({ success: res, message: res ? 'Deleted!' : 'Error Deleting!' });
}

module.exports = router;
