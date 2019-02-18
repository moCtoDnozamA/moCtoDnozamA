'use strict'

const showProductsTemplate = require('../templates/product-listing.handlebars')

const onGetProductsSuccess = productsData => {
  // Handlebars cannot access `_id` in each product object, therefore add field
  // `id` = `_id` to each product object
  productsData.products.forEach(product => { product.id = product['_id'] })
  // send productsData to handlebars file to build index data
  // TODO: Add check whether user is logged in to "if" statement in handlebars.
  const showProductsHTML = showProductsTemplate({ products: productsData.products })
  // add indexed products to div for output to user
  $('#products').html(showProductsHTML)
}

const onGetProductSuccess = productData => {
  // Handlebars cannot access `_id` in the product object, therefore add field
  // `id` = `_id` to the product object
  productData.product.id = productData.product['_id']
  // Handlebars iterates over arrays, therefore put single product into array.
  // TODO: may not use this handelbars file to populate div for output
  const productArray = [productData.product]
  // send productData to handlebars file to build show data
  const showProductsHTML = showProductsTemplate({ products: productArray })
  // add showed product to div for output to user
  $('#products').html(showProductsHTML)
}

module.exports = {
  onGetProductsSuccess,
  onGetProductSuccess
}
