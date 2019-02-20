module.exports = function () {
  $('#search').on('keyup', function () {
    const value = $(this).val().toLowerCase()
    $('body .product').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
  })
}
