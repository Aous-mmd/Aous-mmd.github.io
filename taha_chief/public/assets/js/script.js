$(document).ready(function () {
  $('.search_icon').click(function () {
    if ($('.formIcon input').hasClass("expanded")) {
      $('.formIcon input').removeClass('expanded');
      $('.formIcon input').animate({
        width: "0%",
        opacity: "0"
      });
    } else {
      $('.formIcon input').addClass('expanded');
      $('.formIcon input').animate({
        width: "100%",
        opacity: "1"
      });
    }
  })
});