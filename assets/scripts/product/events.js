'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetProducts = event => {
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
//   // console.log('This is onSeedProducts')
//
//   api.seedProducts()
//
//   $('form').trigger('reset')
// }
// End TODO: Only used to initially seed `products` collection

const onSeedProducts = () => {
  api.seedProducts()
  // .then(console.log)
  // .catch(console.error)
  $('#seedModal').modal('hide')
}

const addProductEventHandlers = () => {
  // TODO: Only used to initially seed `products` collection
  // onSeedProducts()
  // End TODO: Only used to initially seed `products` collection
  // Show all products on page load
  onGetProducts()
  // For click on "Home" button
  $('#index-products').on('click', onGetProducts)
  // For click on View Product button - not add to cart button
  // TODO: Probably remove this after ui is set up.
  $('#show-product').on('click', onGetProduct)
  // For click on product div - not "Add to Cart" button
  $('#products').on('click', '.show-product', onGetProduct)
  $('body').on('click', '#seed-button', onSeedProducts)
}

module.exports = {
  addProductEventHandlers,
  onGetProducts
}
