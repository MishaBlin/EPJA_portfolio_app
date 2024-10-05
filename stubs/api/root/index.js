const rootRouter = require('express').Router();
require('dotenv').config();
const data = require('../data.json');

rootRouter.get('/get/nickname', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': { 'nickname': data.nickname } });
});

rootRouter.get('/get/tech-stack', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': { 'techStack': data.techStack } });
});

rootRouter.get('/get/github-repo', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': { 'githubRepo': data.githubRepo } });
});

rootRouter.get('/get/city', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': { 'city': data.city } });
});

rootRouter.get('/get/nav-links', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': { 'city': data.navLinks } });
});

rootRouter.get('/get/links', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': { 'city': data.links } });
});


module.exports = rootRouter;