'use strict'

const store = require('../store')
const productEvents = require('../product/events')
const showSeedButtonTemplate = require('../templates/show-seedButton.handlebars')

const onSignInSuccess = response => {
  $('#user-message').show()
  if (response.user.admin) {
    $('#user-message').html(`<div class="alert alert-success" role="alert">welcome admin ${response.user.email}</div>`)
    $('#seed').html(showSeedButtonTemplate)
  } else {
    $('#user-message').html('<div class="alert alert-success" role="alert">Sign in success</div>')
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
  $('#cart').show()
  $('.index-orders').show()
  $('#sidebar').show()
  userMessageFade()
}

const onSignUpSuccess = response => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-success" role="alert">Sign up success</div>')
  userMessageFade()
  return response.user._id
}

const onSignOutSuccess = response => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-success" role="alert">Sign out success</div>')
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
  $('#cart').hide()
  $('#orders').hide()
  $('.index-orders').hide()
  $('#sidebar').hide()
  $('#products').show()
  userMessageFade()
}

const onChangePasswordSuccess = response => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-success" role="alert">Change Password success</div>')
  userMessageFade()
}

const onSignInFailure = response => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-danger" role="alert">Sign In Fail</div>')
  userMessageFade()
}

const onSignOutFailure = response => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-danger" role="alert">Sign Out Fail</div>')
  userMessageFade()
}
const onSignUpFailure = response => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-danger" role="alert">Sign Up Fail</div>')
  userMessageFade()
}
const onChangePasswordFailure = response => {
  $('#user-message').show()
  $('#user-message').html('<div class="alert alert-danger" role="alert">Change Password Fail</div>')
  userMessageFade()
}

const userMessageFade = () => {
  $('#user-message').fadeOut(3000)
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
