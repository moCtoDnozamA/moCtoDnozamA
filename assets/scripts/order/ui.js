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
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-danger" role="alert">Get History Fail</div>')
  userMessageFade()
}

const onCheckoutSuccess = response => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-success" role="alert">Check out success</div>')
  userMessageFade()
  return response
}

const onCheckoutFailure = () => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-danger" role="alert">Check out failed.</div>')
  userMessageFade()
}

const onFailure = () => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-danger" role="alert">Error.</div>')
  userMessageFade()
}

const userMessageFade = () => {
  $('#user-message').fadeOut(3000)
}

module.exports = {
  onCheckoutSuccess,
  onCheckoutFailure,
  onGetOrdersSuccess,
  onGetOrdersFail,
  onFailure
}
