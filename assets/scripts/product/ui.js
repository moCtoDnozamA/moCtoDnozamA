'use strict'

const store = require('../store')

const showProductsTemplate = require('../templates/product-listing.handlebars')

const onGetProductsSuccess = productsData => {
  console.log('This is productsData.products[0].id', productsData.products[0]['_id'])
  console.log('This is productsData', productsData)
  // *********
  const showProductsHTML = showProductsTemplate({ products: productsData.products })
  $('#products').html(showProductsHTML)
  // *********
  // $('#products').html('Product Data')
  // store.products = productsData.products
  // const totalGames = store.products.length
  // $('#history-output0').hide()
  // for (let i = 0; i < 5; i++) {
  //   $('#history-output' + (i + 1)).show()
  // }
  // $('#history-output2').text(`Total Games Played: ${totalGames}`)
  // $('#ok').show()
}

const onGetProductSuccess = gamesData => {
  store.game = gamesData.game
}

const onSeedProductsSuccess = gamesData => {
  console.log('Products have been seeded')
}

module.exports = {
  onGetProductsSuccess,
  onGetProductSuccess,
  onSeedProductsSuccess
}
