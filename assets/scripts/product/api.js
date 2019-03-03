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

const seedProducts = () => {
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

module.exports = {
  getProducts,
  getProduct,
  seedProducts
}
