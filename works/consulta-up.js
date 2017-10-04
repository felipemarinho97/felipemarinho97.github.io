$(function() {
  console.log($(window).width());
  if ($(window).width() <= 640) {
    $('.downloadLink').html("Download");
  }
});
