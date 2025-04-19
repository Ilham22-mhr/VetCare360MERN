const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');

router.post('/', ownerController.createOwner);
router.get('/', ownerController.getOwners);
router.get('/:id', ownerController.getOwnerById);
router.get('/search/:lastName', ownerController.getOwnerByLastName); 
router.put('/:id', ownerController.updateOwner);

module.exports = router;