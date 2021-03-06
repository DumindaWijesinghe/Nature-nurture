'use strict';

var Router = require('express').Router;
var controller = require('./user.controller');
var auth = require('../../auth/auth.service');

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);
router.get('/verify/:id', controller.verify);
router.get('/discard/:id', controller.discard);
router.get('/reset_password_request/:id', controller.reset_password_request);
router.post('/reset_password_request/', controller.reset_password_request_data);
module.exports = router;
