'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// const onGetCarts = event => {
//   // console.log(store.user._id)
//   api.getCarts()
//     .then(// console.log)
//     .catch(console.error)
// }

const onGetCart = () => {
  api.getCart(store.user._id)
    .then(ui.onGetCartSuccess)
    .catch(console.error)
}

const onShowCart = () => {
  api.getCart(store.user._id)
    .then(ui.onShowCartSuccess)
    .catch(console.error)
}

const onCreateCart = id => {
  // console.log('create cart')
  api.createCart(id)
    .then(console.log)
    .catch()
}

const onAddCart = event => {
  // // console.log(event)
  // const productId = $(event.target).closest('div.product').data('id')
  // // console.log(productId)
  const productId = event.target.dataset.id
  // // console.log(productId)
  // // console.log('cart in add', store.cart)
  const cart = store.cart
  // // console.log(cart)
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

  // console.log('sum is', store.Sum)
  store.data = {}
  store.data.cart = cart
  // console.log('data', store.data)
  onUpdateCart(store.data)
}

const onUpdateCart = data => {
  api.updateCart(data)
    .then(onGetCart)
    .then(console.log)
    .catch()
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
