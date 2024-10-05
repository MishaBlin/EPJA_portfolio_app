const adminRouter = require('express').Router();
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const dataFilePath = path.join(__dirname, '../data.json');
let data = require('../data.json');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === process.env.TOKEN) {
        next(); // Token is valid, proceed to the next middleware
    } else {
        res.status(403).send({ 'status': 'Failed', 'data': 'Invalid token' });
    }
};

const saveData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
};

adminRouter.post('/edit/nickname', verifyToken, (req, res) => {
    const { nickname } = req.body;
    if (!nickname) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Nickname is required' });
    }

    data.nickname = nickname;
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

    data.city = city;
    saveData(data);

    res.status(200).send({ 'status': 'OK', 'data': 'City updated successfully' });
});

adminRouter.post('/edit/nav-links', verifyToken, (req, res) => {
    const { navLinks } = req.body;
    if (!navLinks || !Array.isArray(navLinks)) {
        return res.status(400).send({ 'status': 'Failed', 'data': 'Valid navLinks are required' });
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

    data.links = links;
    saveData(data);

    res.status(200).send({ 'status': 'OK', 'data': 'Links updated successfully' });
});

module.exports = adminRouter;
