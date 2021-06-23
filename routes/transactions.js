var router = require('express').Router();
const transactionsCtrl = require('../controllers/transactions');

router.post('/items/:id/transactions', transactionsCtrl.create);

module.exports = router;