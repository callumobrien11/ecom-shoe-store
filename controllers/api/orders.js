const Order = require("../../models/Order")

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout,
  };

  async function cart(req, res) {
    // A cart is the unpaid order for a user
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
  }
  
  async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    console.log("add to cart orders controller req.params.id", req.params.id)
    await cart.addItemToCart(req.params.id); 
    res.json(cart);
  }
  
  async function setItemQtyInCart(req, res) {
    let cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty); 
    res.json(cart);
  }
  
  async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save(); 
    res.json(cart);
  }

