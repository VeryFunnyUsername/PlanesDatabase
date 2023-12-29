const express = require('express');
// Router z expresa
const router = express.Router();

// zabezieczenie routów
const isLoggedIn = require('../middleware/isLoggedIn');

// kontrolery
const planesController = require('../controllers/planes');

// lista z bazy dancyh adres: localhost:3000/planes
router.get('/', planesController.planes_get_all);

// dodanie wpisu do listy z adresu localhost:3000/planes
router.post('/', isLoggedIn, planesController.planes_add_new);

// wyświetlenie pojedynczego psisu po jego ID localhost:3000/planes/<planeId>
router.get('/:planeId', planesController.planes_get_by_id);

// Uaktualnienie wpisu localhost:3000/planes/<planeId>
router.put('/:planeId', isLoggedIn, planesController.plane_change);

// Usunięcie wpisu localhost:3000/planes/<planeId>
router.delete('/:planeId', isLoggedIn, planesController.planes_delete);

module.exports = router;