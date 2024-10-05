const authRouter = require('./auth');

const router = require('express').Router();

module.exports = router;

router.use(`/cats/auth`, authRouter);