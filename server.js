// reading environmental variable
if (process.envNODE_ENV !== 'production') {
  require('dotenv').config();
}
const session = require('express-session')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();
// import routes
const testData = require('./routes/test-data.js');

app.disable('x-powered-by');

if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.options('*', cors());
// enable request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(testData);

// error middleware handler
app.use((err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).set('Content-Type', 'text/plain').send(err.message);
  }
  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8000;
// switch environment
app.listen(port, () => {
  if (app.get('env') !== 'test') {
    console.log('High-Chart Listening on port', port);
  }
});

module.exports = app;
