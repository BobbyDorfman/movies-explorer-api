require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
// const cors = require('./middlewares/cors');
const cors = require('cors');
const routes = require('./routes/index');
const limiter = require('./middlewares/limiter');
const serverError = require('./middlewares/errors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const MONGODB_ADDRESS = require('./utils/config');

// Слушаем 3000 порт
const { PORT = 3000, URL, NODE_ENV } = process.env;
const app = express();
app.use(bodyParser.json());

// app.use(cors);
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://api.bobbydorfman.movies.nomoredomains.xyz',
    'https://api.bobbydorfman.movies.nomoredomains.xyz',
  ],
  credentials: true,
}));

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(requestLogger); // подключаем логгер запросов

mongoose.connect(NODE_ENV === 'production' ? URL : MONGODB_ADDRESS, () => {
  console.log('Подключение успешно');
});

app.use(helmet());
app.use(limiter);

app.use(routes);

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors());
app.use(serverError);

app.listen(PORT, () => {
// Если всё работает, консоль покажет, какой порт приложение слушает
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
