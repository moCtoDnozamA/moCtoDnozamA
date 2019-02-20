'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const cartEvents = require('../cart/events')
const store = require('../store')

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    // when sign in can get the cart information
    .catch(ui.onSignInFailure)
  $('form').trigger('reset')
  $('#signInModal').modal('hide')
}

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.credentials = data
  api.signUp(data)
    .then(ui.onSignUpSuccess)

    // when sign up success can creata a new cart for user
    .then((id) => cartEvents.onCreateCart(id))
    .then(onSignUpIn)
    .catch(ui.onSignUpFailure)
  $('form').trigger('reset')
  $('#signUpModal').modal('hide')
}

const onSignUpIn = (event) => {
  delete store.credentials.password_confirmation
  const dataWithoutPC = store.credentials
  api.signIn(dataWithoutPC)
    .then(ui.onSignInSuccess)
    .catch(ui.onFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
  $('form').trigger('reset')
  $('#signUpModal').modal('hide')
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
  $('form').trigger('reset')
  $('#changePassModal').modal('hide')
}

const addAuthEventHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addAuthEventHandlers
}
