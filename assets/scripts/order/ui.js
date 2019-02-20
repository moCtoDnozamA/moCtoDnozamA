'use strict'

const showOrdersTemplate = require('../templates/orders-listing.handlebars')
const showTitleTemplate = require('../templates/order-title.handlebars')

const onGetOrdersSuccess = response => {
  // console.log(response)
  $('#orders').html('')
  const showTitleHTML = showTitleTemplate({totalOrders: response.order.length})
  $('#orders').append(showTitleHTML)
  for (let i = 0; i < response.order.length; i++) {
    const products = response.order[i].orderData.products
    const createDate = new Date(response.order[i].createdAt)
    const totalPrice = response.order[i].totalPrice
    const showOrderHTML = showOrdersTemplate({products: products, date: createDate, price: totalPrice})
    $('#orders').append(showOrderHTML)
    $('#orders').append('<hr>')
  }
  $('#products').hide()
  $('#cart').hide()
  $('#orders').show()
}
const onGetOrdersFail = () => {
  $('#user-message').html('<a class="btn btn-danger">Get History Fail</a>')
}

const onCheckoutSuccess = response => {
  $('#user-message').html('<a class="btn btn-danger">Check out success</a>')
  return response
}

const onCheckoutFailure = () => {
  $('#user-message').html('<a class="btn btn-danger">Check out failed.</a>')
}

const onFailure = () => {
  $('#user-message').html('<a class="btn btn-danger">Error.</a>')
}

module.exports = {
  onCheckoutSuccess,
  onCheckoutFailure,
  onGetOrdersSuccess,
  onGetOrdersFail,
  onFailure
}
