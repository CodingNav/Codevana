const router = require('express').Router();
const viewRoutes = require('./viewRoutes');
const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");
const logoutRoutes = require("./logout-routes");
router.use('./searchroutes', searchRoutes);



router.use('/', viewRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/logout", logoutRoutes);
router.use('/api/searchAPI.', searchRoutes);

module.exports = router;