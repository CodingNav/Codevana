const router = require('express').Router();
const { Favorite } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const favoriteData = await Favorite.create(req.body);
        res.status(200).json(favoriteData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;