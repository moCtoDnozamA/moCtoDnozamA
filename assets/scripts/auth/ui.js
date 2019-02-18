const store = require('../store')

const onSignInSuccess = response => {
  $('#user-message').html('<a class="btn btn-danger">Sign in success</a>')
  store.user = response.user
}

const onSignUpSuccess = response => {
  $('#user-message').html('<a class="btn btn-danger">Sign up success</a>')
  return response.user._id
}

const onSignOutSuccess = response => {
  $('#user-message').html('<a class="btn btn-danger">Sign out success</a>')
  store.user = null
  store.cart = null
  store.Sum = null
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
