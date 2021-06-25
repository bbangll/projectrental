const item = require('../models/item');
const Item = require('../models/item');

module.exports = {
    new: newItems,
    create,
    show,
    delete: deleteItem,
    edit,
    update
}

function newItems(req, res) {
    res.render('items/new');
}

function create(req, res) {
    req.body.userId = req.user._id;
    req.body.userName = req.user.name;
    const item = new Item(req.body);
    // Assign the logged in user's id
    item.save(function(err, itemDoc) {
        if (err) return render('index');
        console.log(itemDoc, '<<<< this is our document')
        //res.redirect(`/items/${item._id}`);
        res.redirect('/');
    });
}

function show(req, res) {
    Item.findById(req.params.id).populate('userId').exec(function(err, items) {
        items.itemViews = items.itemViews + 1;
        items.save(function() {
            console.log(items);
            res.render('items/show', {
                item: items
            });
        })
    });
}

function deleteItem(req, res) {
    console.log(req.params.id, "Hey Puta - this is the req.params");
    Item.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/');
    });
}

function edit(req, res) {
    Item.findById(req.params.id, function(err, item) {
        console.log(req.user._id);
      // Verify book is "owned" by logged in user
      if (!item.userId.equals(req.user._id)) return res.redirect('/');
      res.render('items/edit', {item});
    });
  };

function update(req, res) {
    Item.findByIdAndUpdate(req.params.id, req.body, function(err, item){
        res.redirect(`/items/${item._id}`);
    })
}


  

