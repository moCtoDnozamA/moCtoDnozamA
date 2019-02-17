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

const onSeedProducts = () => {
  // event.preventDefault()
  console.log('This is onSeedProducts')

  api.seedProducts()
    .then(ui.onSeedProductsSuccess)
    .catch(ui.onSeedProductsFailure)

  $('form').trigger('reset')
}

const addProductEventHandlers = event => {
  onSeedProducts()
  $('#index-products').on('click', onGetProducts)
  $('#show-product').on('click', onGetProduct)
  // $('#view-ride-history-btn').on('click', onViewRides)
  // $('#enter-new-ride-form').on('submit', onCreateRide)
  // $('#update-ride-form').on('submit', onUpdateRide)
  // $('#view-ride-history-btn').on('click', onViewRides)
  // $('#done-btn').on('click', onDoneViewingRides)
  // $('#ride-history-table').on('click', '.edit-btn', displayUpdateRideForm)
  // $('#ride-history-table').on('click', '.delete-btn', onDeleteRide)
}

module.exports = {
  addProductEventHandlers
}
