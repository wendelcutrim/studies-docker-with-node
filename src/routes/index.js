const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/homeController');

routes.get('/', homeController.index);

module.exports = routes;