'use strict';
const express = require('express');
const router = express.Router();
const artworksModel = require('../models/Artworks');
const ArtworksCollection = require('../models/data-collection-class');
const artists = new ArtworksCollection(artworksModel);

router.get('/artworks', getArtworks);
router.get('/artworks/:id', getArtwork);
router.put('/artworks/:id', updateArtwork);
router.post('/artworks', createArtwork);
router.delete('/artworks/:id', deleteArtwork);
router.delete('/artworks', deleteAllArtworks);

async function getArtworks(req, res) {
  res.status(200).json(await artists.get());
}

async function getArtwork(req, res) {
  res.status(200).json(await artists.get(req.params.id));
}

async function createArtwork(req, res) {
  res.status(200).json(await artists.create(req.body));
}

async function updateArtwork(req, res) {
  res.status(200).json(await artists.update(req.params.id, req.body));
}

async function deleteArtwork(req, res) {
  res.status(200).json(await artists.delete(req.params.id));
}

async function deleteAllArtworks(req, res) {
  res.status(200).json(await artists.delete());
}

module.exports = router;