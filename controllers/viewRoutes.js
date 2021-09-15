const router = require('express').Router();

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
    res.render('search');
});

router.get('/search/youtube', async (req, res) => {
    res.render('youtube');
});

router.get('/search/reddit', async (req, res) => {
    res.render('reddit');
});

router.get('/search/stackoverflow', async (req, res) => {
    res.render('stackoverflow');
});
router.get('/favorites', async (req, res) => {
    res.render('favorites');
});

router.get('/code-editor', async (req, res) => {
    res.render('code-editor');
});

module.exports = router;