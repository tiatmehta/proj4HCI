const { request, reponse } = require('express');

const express = require('express'),
    path = require('path')
    port = 3000;

const app = express();

console.log('server is running');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname + '/style.css'))
})

app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/signup.html'))
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'))
})

app.get('/homepage.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/homepage.html'))
})

app.get('/daisy.png', (req, res) => {
    res.sendFile(path.join(__dirname + '/daisy.png'))
})

app.get('/daisy2.png', (req, res) => {
    res.sendFile(path.join(__dirname + '/daisy2.png'))
})

app.get('/daisy3.png', (req, res) => {
    res.sendFile(path.join(__dirname + '/daisy3.png'))
})

app.get('/match.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/match.html'))
})

app.get('/match2.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/match2.html'))
})

app.get('/homepage2.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/homepage2.html'))
})

app.get('/sally.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/sally.jpg'))
})

app.get('/sally2.jpg', (req, res) => {
    res.sendFile(path.join(__dirname + '/sally2.jpg'))
})

app.listen(process.env.PORT || port);