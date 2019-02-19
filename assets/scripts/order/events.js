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
      const products = store.cart.products
      const newporducts = []
      for (let i = 0; i < products.length; i++) {
        for (const key in products[i]) {
          if (key === 'product') {
            const product = products[i][key]
            store.orderProduct = (({ imagePath,description,price,title }) => ({ imagePath, description, price, title }))(product)
          }
          if (key === 'quantity') {
            const quantity = products[i][key]
            newporducts.push({product: store.orderProduct, quantity: quantity})
          }
        }
      }
      const purchase = {
        order: {
          orderData: {
            products: newporducts
          },
          totalPrice: store.Sum
        }
      }
      api.saveOrder(purchase)
        .then(console.log)
        .catch(console.error)
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

const onGetOrders = () => {
  api.getOrders()
    .then(console.log)
    .catch()
}

const addOrderEventHandlers = () => {
  $('body').on('click', '#checkout', onCheckout)
  $('#index-orders').on('click', onGetOrders)
}

module.exports = {
  checkoutHandler,
  addOrderEventHandlers
}
