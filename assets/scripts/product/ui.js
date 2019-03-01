'use strict'

const showProductsTemplate = require('../templates/product-listing.handlebars')
const store = require('../store')

const onGetProductsSuccess = productsData => {
  productsData.products.forEach(product => {
    // Handlebars cannot access `_id` in each product object, therefore add
    // field `id` = `_id` to each product object
    product.id = product['_id']
    // Check whether a user is logged in and save in `product` to determine
    // if "Add to Cart" button should be displayed by handlebars file.
    if (store.user) {
      product.userIsLoggedIn = true
    } else {
      product.userIsLoggedIn = false
    }
  })
  // send productsData to handlebars file to build index data
  const showProductsHTML = showProductsTemplate({ products: productsData.products })
  // add indexed products to div for output to user
  $('#products').html(showProductsHTML)
  $('#products').show()
  $('#cart').hide()
  $('#orders').hide()
}

const onGetProductSuccess = productData => {
  // Handlebars cannot access `_id` in the product object, therefore add field
  // `id` = `_id` to the product object
  productData.product.id = productData.product['_id']
  // Check whether a user is logged in and save in `product` to determine
  // if "Add to Cart" button should be displayed by handlebars file.
  if (store.user) {
    productData.product.userIsLoggedIn = true
  } else {
    productData.product.userIsLoggedIn = false
  }
  // Handlebars iterates over arrays, therefore put single product into array.
  // TODO: may not use this handelbars file to populate div for output
  const productArray = [productData.product]
  // send productData to handlebars file to build show data
  const showProductsHTML = showProductsTemplate({ products: productArray })
  // add showed product to div for output to user
  $('#products').html(showProductsHTML)
}

const onSeedProductsSuccess = () => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-success" role="alert">Products Successfully Seeded</div>')
  userMessageFade()
}

const onSeedProductsFailure = () => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-success" role="alert">Product Seeding Failed</div>')
  userMessageFade()
}

const userMessageFade = () => {
  $('#user-message').fadeOut(3000)
}

module.exports = {
  onGetProductsSuccess,
  onGetProductSuccess,
  onSeedProductsSuccess,
  onSeedProductsFailure
}
