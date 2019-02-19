'use strict'

const onCheckoutSuccess = (response) => {
  $('#user-message').html('<a class="btn btn-danger">Check out success</a>')
  return response
}

const onCheckoutFailure = () => {
  $('#user-message').html('<a class="btn btn-danger">Check out failed.</a>')
}

module.exports = {
  onCheckoutSuccess,
  onCheckoutFailure
}
