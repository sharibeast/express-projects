const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/users');

mongoose.connect('mongodb://localhost:27017/login-app').catch((err) => console.log(err));
