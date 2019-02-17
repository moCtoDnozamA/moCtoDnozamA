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

const seedProducts = () => {
  console.log('Products are seeded after this')
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'POST'
  })
}

module.exports = {
  getProducts,
  getProduct,
  seedProducts
}
