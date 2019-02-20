'use strict'

const config = require('../config')
// const store = require('../store')

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
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'POST'
  })
}
// End TODO: Only used to initially seed `products` collection

module.exports = {
  getProducts,
  getProduct,
  seedProducts
}
