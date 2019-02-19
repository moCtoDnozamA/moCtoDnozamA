'use strict'
<<<<<<< 6dbb5f8abe6117d605eb3a8ea6d023a77cdb1721
=======

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
>>>>>>> Integrate Stripe Checkout to client
