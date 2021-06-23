var router = require('express').Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/items/:id/reviews', reviewsCtrl.create);

module.exports = router;