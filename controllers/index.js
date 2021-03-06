const router = require('express').Router();
const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');

const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");
const logoutRoutes = require("./logout-routes");

router.use('/', viewRoutes);
router.use('/api', apiRoutes);

router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/logout", logoutRoutes);


module.exports = router;