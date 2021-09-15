const router = require('express').Router();
const viewRoutes = require('./viewRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/', viewRoutes);
router.use('/api/search', searchRoutes);

module.exports = router;