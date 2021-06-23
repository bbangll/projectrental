const Item = require('../models/item');

module.exports = {
    new: newItems,
    create,
    show
}

function newItems(req, res) {
    res.render('items/new');
}

function create(req, res) {
    const item = new Item(req.body);
    // Assign the logged in user's id
    item.user = req.user._id;
    item.save(function(err, itemDoc) {
        if (err) return render('index');
        console.log(itemDoc, '<<<< this is our document')
        //res.redirect(`/items/${item._id}`);
        res.redirect('/');
    });
}

function show(req, res) {
    Item.findById(req.params.id, function(err, items) {
        console.log(items);
        res.render('items/show', {
            item: items
        });
    });
}

