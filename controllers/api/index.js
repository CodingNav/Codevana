const router = require('express').Router();
const userRoutes = require('./userRoutes');
const searchRoutes = require('./searchRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/user', userRoutes);
router.use('/search', searchRoutes);
router.use('/favorite', favoriteRoutes);

module.exports = router;
