const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');

routes.get('/', homeController.index);
routes.get('/about', homeController.about);
routes.post('/login', authController.login);

module.exports = routes;