'use strict'

const config = require('../config')
const store = require('../store')

const checkout = (token) => {
  // console.log(token)
  return $.ajax({
    url: config.apiUrl + '/charge',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {'token': token, 'amount': parseInt(store.Sum * 100)}
  })
}

const saveOrder = (data) => {
  return $.ajax({
    url: config.apiUrl + '/orders',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getOrders = (id) => {
  return $.ajax({
    url: config.apiUrl + '/orders/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  checkout,
  saveOrder,
  getOrders
}
