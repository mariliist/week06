const express = require('express');
const router = express.Router();
const data = require('../data/countries.json');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:countryId', (req, res) => {
    const requestedCountryId = req.params.countryId; // "1"
    const country = data.countries.find(countryInData => {
        return countryInData.id.toString() === requestedCountryId;
    });

    if (country) {
        res.status(200).json(country);
    } else {
        res.status(404).json({ error: 'Country not found' });
    }
});

module.exports = router;
