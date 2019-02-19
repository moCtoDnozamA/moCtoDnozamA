'use strict'

const config = require('../config')
const store = require('../store')

const getCarts = () => {
  return $.ajax({
    url: config.apiUrl + '/carts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getCart = (id) => {
  return $.ajax({
    url: config.apiUrl + '/carts/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createCart = id => {
  return $.ajax({
    url: config.apiUrl + '/carts',
    method: 'POST',
    data: {
      cart: {
        products: [],
        owner: id
      }
    }
  })
}

const updateCart = (data) => {
  return $.ajax({
    url: config.apiUrl + '/carts/' + store.cart._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getCarts,
  getCart,
  createCart,
  updateCart
}
