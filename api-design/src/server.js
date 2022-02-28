const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const itemRouter = require('./resources/items/item.router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/item', itemRouter);
// app.use(log());

const log = (req, res, next) => {
  console.log('logging');
  req.mydata = 'hello reef';
  next();
};

const start = async () => {
  app.listen(3000, () => {
    console.log('we are good reef');
  });
};

module.exports = { app, start };
