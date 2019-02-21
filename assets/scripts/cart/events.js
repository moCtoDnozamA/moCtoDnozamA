'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGetCart = () => {
  api.getCart(store.user._id)
    .then(ui.onGetCartSuccess)
}

const onShowCart = () => {
  api.getCart(store.user._id)
    .then(ui.onShowCartSuccess)
    .catch(ui.onFailure)
}

const onCreateCart = id => {
  api.createCart(id)
    .then(ui.onCreateCartSuccess)
    .catch(ui.onFailure)
}

const onAddCart = event => {
  const productId = event.target.dataset.id
  const cart = store.cart
  const productAddToCart = {
    product: productId,
    quantity: 1
  }

  store.Found = false

  // prevent repeat push product into cart
  for (let i = 0; i < cart.products.length; i++) {
    const products = cart.products[i]
    if (products.product._id === productId) {
      products.quantity = products.quantity + 1
      store.Found = true
    }
  }
  if (!store.Found) {
    cart.products.push(productAddToCart)
  }

  store.data = {}
  store.data.cart = cart
  // console.log('data', store.data)
  onUpdateCart(store.data)
}

const onUpdateCart = data => {
  api.updateCart(data)
    .then(onGetCart)
    .then(ui.onUpdateCartSuccess)
    .catch(ui.onFailure)
}

const onRemoveProduct = event => {
  const productId = event.target.dataset.id
  // console.log(productId)
  const cart = store.cart
  for (let i = 0; i < cart.products.length; i++) {
    const products = cart.products[i]
    if (products.product._id === productId) {
      products.quantity = products.quantity - 1
    }
  }
  cart.products = cart.products.filter((product) => product.quantity > 0)

  store.data = {}
  store.data.cart = cart
  // console.log('data', store.data)
  onUpdateCart(store.data)
}

const addCartEventHandlers = () => {
  $('body').on('click', '.add-cart', onAddCart)
  $('#view-cart').on('click', onShowCart)
  $('body').on('click', '.addCart', onAddCart)
  $('body').on('click', '.subtractionCart', onRemoveProduct)
}

module.exports = {
  addCartEventHandlers,
  onCreateCart,
  onGetCart,
  onUpdateCart,
  onShowCart
}
