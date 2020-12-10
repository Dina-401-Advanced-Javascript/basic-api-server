'use strict';
const express = require('express');
const router = express.Router();
const Artworks = require('../models/Artworks');
const artists = new Artworks();

router.get('/artworks', getArtworks);
router.get('/artworks/:id', getArtwork);
router.put('/artworks/:id',updateArtwork);
router.post('/artworks',createArtwork);
router.delete('/artworks/:id',deleteArtwork);
router.delete('/artworks',deleteAllArtworks);

function getArtworks(req,res){
    res.status(200).json(artists.get());
}

function getArtwork(req,res) {
    res.status(200).json(artists.get(req.params.id));
}

function createArtwork(req,res) {
    res.status(200).json(artists.create(req.body));
}

function updateArtwork(req,res){
    res.status(200).json(artists.update(req.params.id,req.body));
}

function deleteArtwork(req,res){
    res.status(200).json(artists.delete(req.params.id));
}

function deleteAllArtworks(req,res){
    res.status(200).json(artists.delete());
}

module.exports = router;