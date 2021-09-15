const axios = require('axios');

module.exports = {
    async searchYoutube(search) {
        const key = process.env.YOUTUBE_API_KEY;
        const apiRes = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${search}&part=snippet`);
        const videos = apiRes.data;
        return videos.items;
    },
    async searchReddit(search) {
        const apiRes = await axios.get(`https://www.reddit.com/r/coding/search.json?q=${search}`);
        const posts = apiRes.data.data;
        return posts.children;
    },
    async searchStackOverflow(search) {
        const key = process.env.STACK_API_KEY;
        const apiRes = await axios.get(`https://api.stackexchange.com/2.3/search/advanced?key=${key}&order=desc&sort=activity&q=${search}&accepted=True&site=stackoverflow`);
        const posts = apiRes.data;
        return posts.items;
    }
};