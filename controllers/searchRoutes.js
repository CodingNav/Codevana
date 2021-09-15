const router = require('express').Router();
const axios = require('axios');

router.get('/youtube', async (req, res) => {
    try {
        const key = process.env.YOUTUBE_API_KEY;
        const search = req.query.search;
        const apiRes = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${search}&part=snippet`);
        const videos = apiRes.data;
        console.log(videos);
        res.json(videos);
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;