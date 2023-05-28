const Product = require('../models/product.model');

function getCart(req, res, next)
{
    res.render('customer/cart/cart');
}

async function addCartItem(req, res, next) 
{
    let product;
    try {
        product = await Product.findById(req.body.productId);
    } catch(error)
    {
        next(error);
        return;
    }

    const cart = res.locals.cart;

    cart.addItem(product);
    req.session.cart = cart;

    res.status(201).json({
        message: 'Cart Updated!',
        newTotalItems: cart.totalQuantity,
    });
}

function updateCartItems(req, res) {
    const cart = res.locals.cart;

    const UpdatedItemData = cart.updateItem(req.body.productId, req.body.quantity);

    req.session.cart = cart;

    res.json({
        message: 'Item Updated!',
        updateCartData: {
            newTotalQuantity: cart.totalQuantity,
            newTotalPrice: cart.totalPrice,
            UpdatedItemPrice: UpdatedItemData.UpdatedItemData
        }
    })
}

module.exports = {
    addCartItem: addCartItem,
    getCart: getCart,
    updateCartItems: updateCartItems,
}