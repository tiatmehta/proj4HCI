
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

app.listen(process.env.PORT || port);