const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const AddressController = require('../controllers/AddressController');
const TechController = require('../controllers/TechController');
const ReportController = require('../controllers/ReportController');

router.post('/users', UserController.store);
router.get('/users', UserController.index);

router.post('/users/:userId/address', AddressController.store);
router.get('/users/:userId/address', AddressController.index);

router.post('/users/:userId/techs', TechController.store);
router.get('/users/:userId/techs', TechController.index);
router.delete('/users/:userId/techs', TechController.destroy);

router.get('/report', ReportController.show);

module.exports = router;