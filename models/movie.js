// models/movie.js
const mongoose = require('mongoose');
const isUrl = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isUrl(url),
      message: 'Неправильная ссылка',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isUrl(url),
      message: 'Неправильная ссылка',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isUrl(url),
      message: 'Неправильная ссылка',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
    unique: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

// создаём модель и экспортируем её
module.exports = mongoose.model('movie', movieSchema);
