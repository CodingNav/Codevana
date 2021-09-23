const router = require('express').Router();
const searchAPI = require('../util/searchAPI');
const { Favorite } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/search', async (req, res) => {
    try {
        let videos = await searchAPI.searchYoutube(req.query.search, 5);
        const redditPosts = await searchAPI.searchReddit(req.query.search, 5);
        const stackPosts = await searchAPI.searchStackOverflow(req.query.search, 5);
        let favoriteData = await Favorite.findAll({ where: { user_id: req.session.user_id } });

        favoriteData = favoriteData.map((obj) => {
            return obj.get();
        });
        videos = videos.map((obj) => {
            const foundFav = favoriteData.find((favObj) => {
                return favObj.url == "https://www.youtube.com/watch?v=" + obj.id.videoId;
            })
            if (foundFav != null) {
                obj.favoriteId = foundFav.id;
            }
            return obj;
        });
        

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
    try {
        let favoriteData = await Favorite.findAll({ where: { user_id: req.session.user_id } });
        favoriteData = favoriteData.map((obj) => {
            return obj.get();
        });
        const videos = favoriteData.filter((obj) => {
            return obj.source == "youtube";
        });
        const stackPosts = favoriteData.filter((obj) => {
            return obj.source == "stackoverflow";
        });
        const redditPosts = favoriteData.filter((obj) => {
            return obj.source == "reddit";
        });
        res.render('favorites', { videos, stackPosts, redditPosts});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/code-editor', async (req, res) => {
    res.render('code-editor');
});

module.exports = router;