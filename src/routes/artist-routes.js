'use strict';
const express = require('express');
const router = express.Router();
const Artists = require('../models/Artists');
const artists = new Artists();

router.get('/artists', getArtists);
router.get('/artists/:id', getArtist);
router.put('/artists/:id',updateArtist);
router.post('/artists',createArtist);
router.delete('/artists/:id',deleteArtist);
router.delete('/artists',deleteAllArtists);

function getArtists(req,res){
    res.status(200).json(artists.get());
}

function getArtist(req,res) {
    res.status(200).json(artists.get(req.params.id));
}

function createArtist(req,res) {
    res.status(200).json(artists.create(req.body));
}

function updateArtist(req,res){
    res.status(200).json(artists.update(req.params.id,req.body));
}

function deleteArtist(req,res){
    res.status(200).json(artists.delete(req.params.id));
}

function deleteAllArtists(req,res){
    res.status(200).json(artists.delete());
}

module.exports = router;