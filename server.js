const express = require('express');

const PORT = process.env.PORT || 3300;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());