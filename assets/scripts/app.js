'use strict'

const authenticationEvents = require('./auth/events')
const productEvents = require('./product/events')
const cartEvents = require('./cart/events')
const orderEvents = require('./order/events')

$(() => {
  $('.carousel').carousel()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.view-cart').hide()
  $('.checkout').hide()
  authenticationEvents.addAuthEventHandlers()
  productEvents.addProductEventHandlers()
  cartEvents.addCartEventHandlers()
  orderEvents.addOrderEventHandlers()
})
