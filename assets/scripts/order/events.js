'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const checkoutHandler = StripeCheckout.configure({
  key: 'pk_test_Ba2NFx0UbzDjWo1LB87WJXYN',
  locale: 'auto'
})

// const button = document.getElementById('checkout')
// button.addEventListener('click', function (ev) {
//   checkoutHandler.open({
//     name: 'Sample Store',
//     description: 'Example Purchase',
//     token: handleToken
//   })
// })

const handleToken = function (token) {
  console.log(store.Sum)
  api.checkout(token)
    .then(ui.onCheckoutSuccess)
    .then((response) => {
      console.log('response is:', response)
    })
    .catch(ui.onCheckoutFailure)
}

const onCheckout = () => {
  checkoutHandler.open({
    name: 'Nozama',
    description: 'Purchase',
    token: handleToken,
    amount: store.Sum * 100
  })
}

const addOrderEventHandlers = () => {
  $('body').on('click', '#checkout', onCheckout)
}

module.exports = {
  checkoutHandler,
  addOrderEventHandlers
}
