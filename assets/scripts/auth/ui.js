'use strict'

const store = require('../store')
const productEvents = require('../product/events')
const showSeedButtonTemplate = require('../templates/show-seedButton.handlebars')

const onSignInSuccess = response => {
  if (response.user.admin) {
    $('#user-message').html(`<a class='btn btn-danger'>welcome admin ${response.user.email}</a>`)
    $('#seed').html(showSeedButtonTemplate)
  } else {
    $('#user-message').html('<a class="btn btn-danger" id="seed-message">Sign in success</a>')
  }
  store.user = response.user
  // reload product listing with "Add to Cart" buttons on successful sign in
  productEvents.onGetProducts()
  $('.change-password').show()
  $('.sign-out').show()
  $('.index').show()
  $('.view-cart').show()
  $('.checkout').show()
  $('.sign-in').hide()
  $('.sign-up').hide()
}

const onSignUpSuccess = response => {
  $('#user-message').html('<a class="btn btn-danger">Sign up success</a>')
  return response.user._id
}

const onSignOutSuccess = response => {
  $('#user-message').html('<a class="btn btn-danger">Sign out success</a>')
  $('#seed').html('')
  store.user = null
  store.cart = null
  store.Sum = null
  // reload product listing with "Sign in to Add to Cart" message on sign out
  productEvents.onGetProducts()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.view-cart').hide()
  $('.sign-in').show()
  $('.sign-up').show()
  $('.checkout').hide()
}

const onChangePasswordSuccess = response => {
  $('#user-message').html('<a class="btn btn-danger">Change Password success</a>')
}

const onSignInFailure = response => {
  $('#user-message').html('<a class="btn btn-danger">Sign In Fail</a>')
}
const onSignOutFailure = response => {
  $('#user-message').html('<a class="btn btn-danger">Sign Out Fail</a>')
}
const onSignUpFailure = response => {
  $('#user-message').html('<a class="btn btn-danger">Sign Up Fail</a>')
}
const onChangePasswordFailure = response => {
  $('#user-message').html('<a class="btn btn-danger">Change Password Fail</a>')
}

module.exports = {
  onSignInSuccess,
  onSignOutSuccess,
  onSignUpSuccess,
  onChangePasswordSuccess,
  onSignInFailure,
  onSignOutFailure,
  onSignUpFailure,
  onChangePasswordFailure
}
