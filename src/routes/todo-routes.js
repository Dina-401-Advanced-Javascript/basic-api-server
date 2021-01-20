'use strict';
const express = require('express');
const router = express.Router();
const toDoModel = require('../models/toDo');
const ToDoCollection = require('../models/data-collection-class');
const toDos = new ToDoCollection(toDoModel);
const validator = require('../middleware/validator');

router.get('/todo', getToDos);
router.get('/todo/:id', getToDo);
router.put('/todo/:id', validator, updateToDo);
router.post('/todo', createToDo);
router.delete('/todo/:id', validator, deleteToDo);

async function getToDos(req, res) {
  res.status(200).json(await toDos.get());
}

async function getToDo(req, res) {
  res.status(200).json(await toDos.get(req.params.id));
}

async function createToDo(req, res) {
  res.status(200).json(await toDos.create(req.body));
}

async function updateToDo(req, res) {
  res.status(200).json(await toDos.update(req.params.id, req.body));
}

async function deleteToDo(req, res) {
  res.status(200).json(await toDos.delete(req.params.id));
}

module.exports = router;