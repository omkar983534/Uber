const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const { getCoordinates } = require('../controllers/map.controller')
const mapController = require('../controllers/map.controller');
const { query } = require('express-validator');

//router for finding the coordinates
router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.authUser, mapController.getCoordinates
);

//routes for find distance

router.get('/get-distance-time',
    query('origin').isString().isLength({ min:3}),
    query('destination').isString().isLength({ min:3}),
    authMiddleware.authUser, mapController.getDistanceTime
);

//router for showing the suggestions

router.get('/get-suggestions',
    query('input').isString().isLength({ min: 4}),
    authMiddleware.authUser, mapController.getAutoCompleteSuggestions
);




module.exports = router;