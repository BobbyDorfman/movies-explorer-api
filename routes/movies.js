const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { movieValidation, movieIdValidation } = require('../middlewares/validation');

router.get('/', getMovies);
router.post('/', movieValidation, createMovie);
router.delete('/:_id', movieIdValidation, deleteMovie);

module.exports = router;
