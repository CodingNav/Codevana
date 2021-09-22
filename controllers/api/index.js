const router = require('express').Router();
const userRoutes = require('./userRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/search', searchRoutes);
router.use('/user', userRoutes);

module.exports = router;
