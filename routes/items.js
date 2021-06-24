var router = require('express').Router();
const itemsCtrl = require('../controllers/items');

router.get('/new', itemsCtrl.new);
router.post('/', itemsCtrl.create);
router.get('/:id', itemsCtrl.show);
router.delete('/:id', itemsCtrl.delete);
// Updating an item
router.get('/:id/edit', itemsCtrl.edit);

module.exports = router;