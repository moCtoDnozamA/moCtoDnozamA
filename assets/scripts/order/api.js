'use strict'
<<<<<<< 6dbb5f8abe6117d605eb3a8ea6d023a77cdb1721
=======

const config = require('../config')
const store = require('../store')

const checkout = (token) => {
  console.log(token)
  return $.ajax({
    url: config.apiUrl + '/charge',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {'token': token, 'amount': parseInt(store.Sum * 100)}
  })
}

module.exports = {
  checkout
}
>>>>>>> Integrate Stripe Checkout to client
