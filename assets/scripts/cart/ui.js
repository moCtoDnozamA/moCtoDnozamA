'use strict'

const store = require('../store')
const showCartTemplate = require('../templates/cart-listing.handlebars')

const onGetCartSuccess = response => {
  store.Sum = 0
  store.cart = response.cart
  // console.log(store.cart)
  const products = response.cart.products
  // console.log(products.length)
  if (products.length > 0) {
    // calculateTotal
    for (let i = 0; i < products.length; i++) {
      store.Sum += products[i].quantity * products[i].product.price
    }
  }
  store.Sum = store.Sum.toFixed(2)
  $('#cart').html('')
  const showCartHtml = showCartTemplate({cartProducts: response.cart.products, totalPrice: store.Sum})
  $('#cart').html(showCartHtml)
  $('#orders').hide()
  $('#cart').show()
}

const onShowCartSuccess = (response) => {
  const showCartHtml = showCartTemplate({cartProducts: response.cart.products, totalPrice: store.Sum})
  $('#cart').html(showCartHtml)
  $('#products').hide()
  $('#cart').show()
  $('#orders').hide()
}

const onUpdateCartSuccess = () => {
  $('#user-message').html('<div class="alert alert-success" role="alert">Update cart success</div>')
  userMessageFade()
}

const onFailure = () => {
  $('#user-message').html('<div class="alert alert-danger" role="alert">Error.</div>')
  userMessageFade()
}

const userMessageFade = () => {
  $('#user-message').fadeOut(1000)
}

module.exports = {
  onGetCartSuccess,
  onShowCartSuccess,
  onUpdateCartSuccess,
  onFailure
}
