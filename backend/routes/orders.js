const router = require('express').Router();
let Order = require('../models/order.model');

router.route('/').get((req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;
  const address = req.body.address;
  const menu = req.body.menu;

  const newOrder = new Order({
    name,
    email,
    number,
    address,
    menu,
  });

  newOrder.save()
    .then(() => res.json('Order added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
