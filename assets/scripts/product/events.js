'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetProducts = event => {
  event.preventDefault()

  api.getProducts()
    .then(ui.onGetProductsSuccess)
    .catch(ui.onGetProductsFailure)

  $('form').trigger('reset')
}

const onGetProduct = event => {
  event.preventDefault()
  const productId = $(event.target).closest('div').data('id')

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
  $('#index-products').on('click', onGetProducts)
  $('#show-product').on('click', onGetProduct)
}

module.exports = {
  addProductEventHandlers
}
