const axios = require('axios');

module.exports = {
    async searchYoutube(search, maxResults = 50) {
        const key = process.env.YOUTUBE_API_KEY;
        const apiRes = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&maxResults=${maxResults}&part=snippet&q=coding+${search}`).catch(err => {
            console.log(err);
            return null
        });
        // if (apiRes == null) {
        //     return null;
        // };
        // const videos = apiRes.data;
        // return videos.items;
        return apiRes ? apiRes.data.items : null;
    },
    async searchReddit(search, limit = 100) {
        const apiRes = await axios.get(`https://www.reddit.com/r/coding/search.json?restrict_sr=true&limit=${limit}&q=${search}`).catch(err => {
            console.log(err);
            return null
        });
        return apiRes ? apiRes.data.data.children : null;
    },
    async searchStackOverflow(search, pagesize = 100) {
        const key = process.env.STACK_API_KEY;
        const apiRes = await axios.get(`https://api.stackexchange.com/2.3/search/advanced?key=${key}&order=desc&sort=activity&accepted=True&site=stackoverflow&pagesize=${pagesize}&q=${search}`).catch(err => {
            console.log(err);
            return null
        });
        return apiRes ? apiRes.data.items : null;
    }
};