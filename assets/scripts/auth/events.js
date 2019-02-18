const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const cartEvents = require('../cart/events')

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    // when sign in can get the cart information
    .then(cartEvents.onGetCart)
    .catch(ui.onSignInFailure)
  $('form').trigger('reset')
}

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    // when sign up success can creata a new cart for user
    .then((id) => cartEvents.onCreateCart(id))
    .catch(ui.onSignUpFailure)
  $('form').trigger('reset')
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
  $('form').trigger('reset')
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
  $('form').trigger('reset')
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
