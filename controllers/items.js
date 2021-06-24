const item = require('../models/item');
const Item = require('../models/item');

module.exports = {
    new: newItems,
    create,
    show,
    delete: deleteItem,
    edit
}

function newItems(req, res) {
    res.render('items/new');
}

function create(req, res) {
    const item = new Item(req.body);
    // Assign the logged in user's id
    item.user = req.user._id;
    item.user.name = req.user.name;
    item.save(function(err, itemDoc) {
        if (err) return render('index');
        //console.log(itemDoc, '<<<< this is our document')
        //res.redirect(`/items/${item._id}`);
        res.redirect('/');
    });
}

function show(req, res) {
    Item.findById(req.params.id).populate('userId').exec(function(err, items) {
        res.render('items/show', {
            item: items
        });
    });
}

function deleteItem(req, res) {
    console.log(req.params.id, "Hey Puta - this is the req.params");
    item.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/');
    });
}

function edit(req, res) {
    Item.findById(req.params.id, function(err, book) {
      // Verify book is "owned" by logged in user
      if (!item.user.equals(req.user._id)) return res.redirect('/');
      res.render('items/edit', {book});
    });
  }

