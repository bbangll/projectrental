const Item = require('../models/item');

module.exports = {
    index
}

function index(req, res) {
    Item.find({}, function(err, allItemsDocuments) {
        res.render('index', {
            items: allItemsDocuments
        })
    });
}