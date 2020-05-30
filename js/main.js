var links = [ "images/Home/items/Hairdressing ServicesBK.jpg",
              "images/Home/items/Hairdressing Services.jpg",
              "images/Home/items/Make-up ServicesBK.jpg",
              "images/Home/items/Make-up Services.jpg",
              "images/Home/items/NAILS SERVICESBK.jpg",
              "images/Home/items/NAILS SERVICES.jpg",
              "images/Home/items/BODY TREATMENTBK.jpg",
              "images/Home/items/BODY TREATMENT.jpg",
              "images/Home/items/MASSAGEBK.jpg",
              "images/Home/items/MASSAGE.jpg",
              "images/Home/items/SIGNATURE MAMATI MASSAGEBK.jpg",
              "images/Home/items/SIGNATURE MAMATI MASSAGE.jpg",
              "images/Home/items/FACIALBK.jpg",
              "images/Home/items/FACIAL.jpg",
              "images/Home/items/Royal PavilionBK.jpg",
              "images/Home/items/Royal Pavilion.jpg",
              "images/Home/items/the formula day spaBK.jpg",
              "images/Home/items/the formula day spa.jpg",
              "images/Home/items/PACKAGESBK.jpg",
              "images/Home/items/PACKAGES.jpg",
              "images/Home/items/SPECIAL BATHBK.jpg",
              "images/Home/items/SPECIAL BATH.jpg",
              "images/Home/items/KIDS BEAUTYBK.jpg",
              "images/Home/items/KIDS BEAUTY.jpg",
              "images/Home/items/EYE LASHES EXTENSIONBK.jpg",
              "images/Home/items/EYE LASHES EXTENSION.jpg",
              "images/Home/items/SALT CAVEBK.jpg",
              "images/Home/items/SALT CAVE.jpg",
              "images/Home/items/HAIR EXTENTIONBK.jpg",
              "images/Home/items/HAIR EXTENTION.jpg",
              "images/Home/items/NOSE PIERCINGBK.jpg",
              "images/Home/items/NOSE PIERCING.jpg",
              "images/Home/items/MASSAGE THERAPISTBK.jpg",
              "images/Home/items/MASSAGE THERAPIST.jpg",
              "images/Home/items/LPG SLIM FIRM AND FITBK.jpg",
              "images/Home/items/LPG SLIM FIRM AND FIT.jpg",
              "images/Home/items/Henna servicesBK.jpeg",
              "images/Home/items/Henna services.jpeg"
            ]
$(document).ready(function () {
  $('#img1')
      .mouseover(function () {
      $('#1').attr("src", links[1]);
  })
      .mouseout(function () {
      $('#1').attr("src", links[0]);
  });
  $('#img2')
      .mouseover(function () {
      $('#2').attr("src", links[3]);
  })
      .mouseout(function () {
      $('#2').attr("src", links[2]);
  });
  $('#img3')
      .mouseover(function () {
      $('#3').attr("src", links[5]);
  })
      .mouseout(function () {
      $('#3').attr("src", links[4]);
  });
  $('#img4')
      .mouseover(function () {
      $('#4').attr("src", links[7]);
  })
      .mouseout(function () {
      $('#4').attr("src", links[6]);
  });
  $('#img5')
      .mouseover(function () {
      $('#5').attr("src", links[9]);
  })
      .mouseout(function () {
      $('#5').attr("src", links[8]);
  });
  $('#img6')
      .mouseover(function () {
      $('#6').attr("src", links[11]);
  })
      .mouseout(function () {
      $('#6').attr("src", links[10]);
  });
  $('#img7')
      .mouseover(function () {
      $('#7').attr("src", links[13]);
  })
      .mouseout(function () {
      $('#7').attr("src", links[12]);
  });
  $('#img8')
      .mouseover(function () {
      $('#8').attr("src", links[15]);
  })
      .mouseout(function () {
      $('#8').attr("src", links[14]);
  });
  $('#img9')
      .mouseover(function () {
      $('#9').attr("src", links[17]);
  })
      .mouseout(function () {
      $('#9').attr("src", links[16]);
  });
  $('#img10')
      .mouseover(function () {
      $('#10').attr("src", links[19]);
  })
      .mouseout(function () {
      $('#10').attr("src", links[18]);
  });
  $('#img11')
      .mouseover(function () {
      $('#11').attr("src", links[21]);
  })
      .mouseout(function () {
      $('#11').attr("src", links[20]);
  });
  $('#img12')
      .mouseover(function () {
      $('#12').attr("src", links[23]);
  })
      .mouseout(function () {
      $('#12').attr("src", links[22]);
  });
  $('#img13')
      .mouseover(function () {
      $('#13').attr("src", links[25]);
  })
      .mouseout(function () {
      $('#13').attr("src", links[24]);
  });
  $('#img14')
      .mouseover(function () {
      $('#14').attr("src", links[27]);
  })
      .mouseout(function () {
      $('#14').attr("src", links[26]);
  });
  $('#img15')
      .mouseover(function () {
      $('#15').attr("src", links[29]);
  })
      .mouseout(function () {
      $('#15').attr("src", links[28]);
  });
  $('#img16')
      .mouseover(function () {
      $('#16').attr("src", links[31]);
  })
      .mouseout(function () {
      $('#16').attr("src", links[30]);
  });
  $('#img17')
      .mouseover(function () {
      $('#17').attr("src", links[33]);
  })
      .mouseout(function () {
      $('#17').attr("src", links[32]);
  });
  $('#img18')
      .mouseover(function () {
      $('#18').attr("src", links[35]);
  })
      .mouseout(function () {
      $('#18').attr("src", links[34]);
  });
  $('#img19')
      .mouseover(function () {
      $('#19').attr("src", links[37]);
  })
      .mouseout(function () {
      $('#19').attr("src", links[36]);
  });
});
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