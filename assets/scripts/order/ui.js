'use strict'

const onCheckoutSuccess = () => {
  $('#user-message').html('<a class="btn btn-danger">Check out success</a>')
}

const onCheckoutFailure = () => {
  $('#user-message').html('<a class="btn btn-danger">Check out failed.</a>')
}

module.exports = {
  onCheckoutSuccess,
  onCheckoutFailure
}
