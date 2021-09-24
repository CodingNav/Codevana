const router = require('express').Router();
const searchAPI = require('../../util/searchAPI');

router.get('/youtube', async (req, res) => {
    try {
        const videos = await searchAPI.searchYoutube(req.query.search);
        res.json(videos);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/reddit', async (req, res) => {
    try {
        const posts = await searchAPI.searchReddit(req.query.search);
        res.json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/stackoverflow', async (req, res) => {
    try {
        const posts = await searchAPI.searchStackOverflow(req.query.search);
        res.json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;