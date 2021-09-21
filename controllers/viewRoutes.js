const router = require('express').Router();
const searchAPI = require('../util/searchAPI');

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/search', async (req, res) => {
    try {
        const videos = await searchAPI.searchYoutube(req.query.search, 5);
        const redditPosts = await searchAPI.searchReddit(req.query.search, 5);
        const stackPosts = await searchAPI.searchStackOverflow(req.query.search, 5);
        res.render('search', { videos, redditPosts, stackPosts });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/search/youtube', async (req, res) => {
    try {
        const videos = await searchAPI.searchYoutube(req.query.search);
        res.render('youtube', { videos });
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/search/reddit', async (req, res) => {
    try {
        const posts = await searchAPI.searchReddit(req.query.search);
        res.render('reddit', { posts });
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/search/stackoverflow', async (req, res) => {
    try {
        const posts = await searchAPI.searchStackOverflow(req.query.search);
        res.render('stackoverflow', { posts });
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/favorites', async (req, res) => {
    res.render('favorites');
});

router.get('/code-editor', async (req, res) => {
    res.render('code-editor');
});

module.exports = router;