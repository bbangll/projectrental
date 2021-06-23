const Item = require('../models/item');

module.exports = {
    create
}

function create(req, res) {

    //console.log(req.body);
    //console.log(req.params.id)

    Item.findById(req.params.id, function(err, item) {
      // Update req.body to contain user info
      //req.body.userId = req.user._id;
      //req.body.userName = req.user.name;
      // Add the comment
      item.transactions.push(req.body);
      item.save(function(err) {
        res.redirect(`/items/${item._id}`);
      });
    });
  }