'use strict';
const express = require('express');
const router = express.Router();
const artistModel = require('../models/Artists');
const ArtistsCollection = require('../models/data-collection-class');
const artists = new ArtistsCollection(artistModel);
const validator = require('../middleware/validator');

router.get('/artists', getArtists);
router.get('/artists/:id', getArtist);
router.put('/artists/:id', validator, updateArtist);
router.post('/artists', createArtist);
router.delete('/artists/:id', validator, deleteArtist);

async function getArtists(req, res) {
  res.status(200).json(await artists.get());
}

async function getArtist(req, res) {
  res.status(200).json(await artists.get(req.params.id));
}

async function createArtist(req, res) {
  res.status(200).json(await artists.create(req.body));
}

async function updateArtist(req, res) {
  res.status(200).json(await artists.update(req.params.id, req.body));
}

async function deleteArtist(req, res) {
  res.status(200).json(await artists.delete(req.params.id));
}

module.exports = router;