const authRouter = require('express').Router();
require('dotenv').config();

module.exports = authRouter;

authRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(`Login with email=${email} and password=${password}`);

    if (email === 'admin@admin.admin' && password === 'admin') {
        res.status(200).send({ 'status': 'OK', 'data': `${process.env.TOKEN}` });
    } else {
        res.status(401).send({ 'status': 'Failed!', 'data': 'Invalid email or password' });
    }
});
