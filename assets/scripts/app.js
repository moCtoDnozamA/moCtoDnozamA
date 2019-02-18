'use strict'

const authenticationEvents = require('./auth/events')
const productEvents = require('./product/events')
const cartEvents = require('./cart/events')
const orderEvents = require('./order/events')

$(() => {
  authenticationEvents.addAuthEventHandlers()
  productEvents.addProductEventHandlers()
  cartEvents.addCartEventHandlers()
  orderEvents.addOrderEventHandlers()
})
