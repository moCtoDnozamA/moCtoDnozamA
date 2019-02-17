'use strict'

const showProductsTemplate = require('../templates/product-listing.handlebars')

const onGetProductsSuccess = productsData => {
  const showProductsHTML = showProductsTemplate({ products: productsData.products })
  $('#products').html(showProductsHTML)
}

const onGetProductSuccess = () => {

}

module.exports = {
  onGetProductsSuccess,
  onGetProductSuccess
}
