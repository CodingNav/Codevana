const router = require('express').Router();
const axios = require('axios');
const searchAPI = require('../util/searchAPI');

router.get('/youtube', async (req, res) => {
    try {
        const videos = searchAPI.searchYoutube(req.query.search);
        res.json(videos);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/reddit', async (req, res) => {
    try {
        const posts = searchAPI.searchReddit(req.query.search);
        res.json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/stackoverflow', async (req, res) => {
    try {
        const posts = searchAPI.searchStackOverflow(req.query.search);
        res.json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;