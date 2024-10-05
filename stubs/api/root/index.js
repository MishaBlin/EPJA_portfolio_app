const rootRouter = require('express').Router();
require('dotenv').config();
const data = require('../data.json');

rootRouter.get('/get/nickname', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': data.nickname });
});

rootRouter.get('/get/tech-stack', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': data.githubRepo });
});

rootRouter.get('/get/github-repo', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': data.githubRepo });
});

rootRouter.get('/get/city', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': data.city });
});

rootRouter.get('/get/nav-links', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': data.navLinks });
});

rootRouter.get('/get/links', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': data.links });
});


module.exports = rootRouter;