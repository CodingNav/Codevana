module.exports = {
    searchYoutube(search) {
        const key = process.env.YOUTUBE_API_KEY;
        const apiRes = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${search}&part=snippet`);
        const videos = apiRes.data;
        console.log(videos);
        return videos;
    },
    searchReddit(search) {
        const apiRes = await axios.get(`https://www.reddit.com/r/coding/search.json?q=${search}`);
        const posts = apiRes.data.data;
        console.log(posts);
        return posts;
    },
    searchStackOverflow(search) {
        const key = process.env.STACK_API_KEY;
        const apiRes = await axios.get(`https://api.stackexchange.com/2.3/search/advanced?key=${key}&order=desc&sort=activity&q=${search}&accepted=True&site=stackoverflow`);
        const posts = apiRes.data;
        console.log(posts);
        return posts;
    }
};