const express = require('express');
const mapService = require('../services/maps.service')
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res, next) => {
    const { address } = req.query;
    try {

        const coordinates = await mapService.geocodeAddress(address);
        res.status(200).json({ coordinates });
    } catch (error) {
        res.status(404).json({ message: 'Coordinates not found ' });
    }

}



module.exports.getDistanceTime = async (req, res, next) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        const { origin, destination } = req.body;
        const distanceTime = await mapService.getDistanceAndTime(origin, destination);
        res.status(200).json(distanceTime);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });

    }
}

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        const { input } = req.query;
        const suggestions = await getSuggestions.getAutoCompleteSuggestions(input);
        res.status(200).json(suggestions);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}
