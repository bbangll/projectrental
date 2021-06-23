var router = require('express').Router();
const itemsCtrl = require('../controllers/items');

router.get('/new', itemsCtrl.new);
router.post('/', itemsCtrl.create);
router.get('/:id', itemsCtrl.show)


module.exports = router;