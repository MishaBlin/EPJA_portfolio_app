const authRouter = require('./auth');
const adminRouter = require('./admin');
const rootRouter = require('./root');

const router = require('express').Router();

module.exports = router;

router.use(`/cats/auth`, authRouter);
router.use(`/cats/admin`, adminRouter);
router.use(`/cats/`, rootRouter);