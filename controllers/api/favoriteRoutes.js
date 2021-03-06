const router = require('express').Router();
const { Favorite } = require('../../models');

router.post('/', async (req, res) => {
    try {
        req.body.user_id = req.session.user_id
        const favoriteData = await Favorite.create(req.body);
        res.status(200).json(favoriteData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const favoriteData = await Favorite.destroy({ where: {user_id: req.session.user_id, id: req.params.id}});
        res.status(200).json(favoriteData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;