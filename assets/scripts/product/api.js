'use strict'

const config = require('../config')
const store = require('../store')

const getProducts = () => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'GET'
  })
}

const getProduct = productId => {
  return $.ajax({
    url: config.apiUrl + '/products/' + productId,
    method: 'GET'
  })
}

// TODO: Only used to initially seed `products` collection
const seedProducts = () => {
  // console.log('Products are seeded after this')
  // console.log('This is isAdmin:', store.user)
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      isAdmin: store.user.admin,
      email: store.user.email
    }
  })
}
// End TODO: Only used to initially seed `products` collection

module.exports = {
  getProducts,
  getProduct,
  seedProducts
}
