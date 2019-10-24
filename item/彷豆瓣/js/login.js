
window.onload=function () {
  $(".login-input .input-1").focus(function() {
    $(this).addClass('shadow')
  })
  $(".login-input .input-1").blur(function() {
    $(this).removeClass('shadow')
  })
}
