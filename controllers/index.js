const router = require('express').Router();
const viewRoutes = require('./viewRoutes');
const searchRoutes = require('./searchRoutes');

const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");
const logoutRoutes = require("./logout-routes");

router.use('/', viewRoutes);
router.use('/api/search', searchRoutes);

router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/logout", logoutRoutes);


module.exports = router;