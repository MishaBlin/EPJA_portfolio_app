const rootRouter = require('express').Router();
require('dotenv').config();
const data = require('../data.json');

rootRouter.get('/get/nickname', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': data.nickname });
});

rootRouter.get('/get/tech-stack', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': data.techStack });
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

rootRouter.get('/get/projects', (req, res) => {
    res.status(200).send({ 'status': 'OK', 'data': data.projects });
});

rootRouter.get('/get/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = data.projects.find(p => p.id === id);
    
    if (project) {
        res.status(200).send({ status: 'OK', data: project });
    } else {
        res.status(404).send({ status: 'NOT_FOUND', message: 'Project not found' });
    }
});


module.exports = rootRouter;