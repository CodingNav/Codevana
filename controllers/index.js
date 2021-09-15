const router = require('express').Router();
const searchRoutes = require('./searchRoutes');

router.use('/api/search', searchRoutes);

module.exports = router;