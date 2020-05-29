function mouseaway(my_image) {
    my_image.src = "/images/Home/items/Hairdressing ServicesBK.jpg";
}

function rollover(my_image) {
    my_image.src = "/images/Home/items/Hairdressing Services.jpg";
}

$("#accordion").accordion({
  heightStyle: "content",
  active:false,
  collapsible: true,
  header:"div.accordianheader"
});

var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});
Waves.attach('button.back-to-top', 'waves-effect');
Waves.init();