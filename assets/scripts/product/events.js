'use strict'

const api = require('./api')
const ui = require('./ui')

// const cartEvents = require('../cart/events')

const onGetProducts = event => {
  event.preventDefault()

  api.getProducts()
    .then(ui.onGetProductsSuccess)
    .catch(ui.onGetProductsFailure)

  $('form').trigger('reset')
}

const onGetProduct = event => {
  event.preventDefault()
  // Store product data-id from handlebars file
  const productId = $(event.target).closest('div.product').data('id')

  api.getProduct(productId)
    .then(ui.onGetProductSuccess)
    .catch(ui.onGetProductFailure)

  $('form').trigger('reset')
}

// TODO: Only used to initially seed `products` collection
// const onSeedProducts = () => {
//   console.log('This is onSeedProducts')
//
//   api.seedProducts()
//
//   $('form').trigger('reset')
// }
// End TODO: Only used to initially seed `products` collection

const addProductEventHandlers = event => {
  // TODO: Only used to initially seed `products` collection
  // onSeedProducts()
  // End TODO: Only used to initially seed `products` collection
  // For click on "Home" button
  $('#index-products').on('click', onGetProducts)
  // For click on View Product button - not add to cart button
  // TODO: Probably remove this after ui is set up.
  $('#show-product').on('click', onGetProduct)
  // For click on "Add to Cart" button, refers to `cart/events`.
  // TODO: Is this already included in handlers in `cart/events`?
  // $('#products').on('click', '.add-cart', cartEvents.onAddCart)
  // For click on product div - not "Add to Cart" button
  $('#products').on('click', '.show-product', onGetProduct)
}

module.exports = {
  addProductEventHandlers
}
