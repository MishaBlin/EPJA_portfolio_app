const adminRouter = require('express').Router();
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const dataFilePath = path.join(__dirname, '../data.json');
let data = require('../data.json');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === process.env.TOKEN) {
        next();
    } else {
        res.status(403).send({ 'status': 'Failed', 'data': 'Invalid token' });
    }
};

const saveData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
};

adminRouter.post('/edit/nickname', verifyToken, (req, res) => {
    const { name, colored } = req.body;
    if (!name || !colored) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Nickname is required' });
    }

    data.nickname = { name, colored };
    saveData(data);

    res.status(200).send({ 'status': 'OK', 'data': 'Nickname updated successfully' });
});

adminRouter.post('/edit/tech-stack', verifyToken, (req, res) => {
    const { techStack } = req.body;
    if (!techStack || !Array.isArray(techStack)) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Valid tech stack is required' });
    }

    data.techStack = techStack;
    saveData(data);

    res.status(200).send({ 'status': 'OK', 'data': 'Tech stack updated successfully' });
});

adminRouter.post('/edit/city', verifyToken, (req, res) => {
    const { city } = req.body;
    if (!city) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'City is required' });
    }

    const isValid = typeof city === 'object' && 'name' in city && 'href' in city;

    if (!isValid) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'City must contain href and name' });
    }

    data.city = city;
    saveData(data);

    res.status(200).send({ 'status': 'OK', 'data': 'City updated successfully' });
});

adminRouter.post('/edit/github-repo', verifyToken, (req, res) => {
    const { github } = req.body;
    if (!github) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Github is required' });
    }

    const isValid = typeof github === 'object' && 'author' in github && 'repo' in github;

    if (!isValid) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Github must contain author and repo' });
    }

    data.githubRepo = github;
    saveData(data);

    res.status(200).send({ 'status': 'OK', 'data': 'Github updated successfully' });
});

adminRouter.post('/edit/nav-links', verifyToken, (req, res) => {
    const { navLinks } = req.body;
    if (!navLinks || !Array.isArray(navLinks)) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Valid navLinks are required' });
    }

    const isValid = navLinks.every(link =>
        link && typeof link === 'object' && 'href' in link && 'title' in link
    );

    if (!isValid) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Each navLink must contain href and title' });
    }

    data.navLinks = navLinks;
    saveData(data);

    res.status(200).send({ 'status': 'OK', 'data': 'Navigation links updated successfully' });
});

adminRouter.post('/edit/links', verifyToken, (req, res) => {
    const { links } = req.body;
    if (!links || !Array.isArray(links)) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Valid links are required' });
    }

    const isValid = links.every(link =>
        link && typeof link === 'object' && 'href' in link && 'title' in link
    );

    if (!isValid) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Each link must contain href and title' });
    }

    data.links = links;
    saveData(data);

    res.status(200).send({ 'status': 'OK', 'data': 'Links updated successfully' });
});

adminRouter.post('/projects/new', verifyToken, (req, res) => {
    const { project } = req.body;
    if (!project) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Project is required' });
    }

    const projectFields = ['id', 'title', 'description', 'link', 'techStack', 'image'];

    const isValid = projectFields.every(field => field && field in project);

    if (!isValid) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Project must contain ' + projectFields.join(", ") });
    }

    data.projects.push(project);
    saveData(data);

    res.status(200).send({ 'status': 'OK', 'data': 'Project was added successfully' });
});

adminRouter.delete('/projects/:id', verifyToken, (req, res) => {
    const { id } = req.params;
    const project = data.projects.find(p => p.id === id);

    if (project) {
        data.projects = data.projects.filter(p => p.id !== id);
        saveData(data); 

        res.status(200).send({ status: 'OK', message: "Project was deleted successfully" });
    } else {
        res.status(404).send({ status: 'NOT_FOUND', message: 'Project not found' });
    }
});

module.exports = adminRouter;
