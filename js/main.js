var links = ["images/Home/items/Hairdressing ServicesBK.jpg",
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
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 309 && scrollTop<311) {
            $(".s1").animate({
                right: '0',
                opacity: '1',
            }, "slow");
            $(".s1r").animate({
                left: '0',
                opacity: '1',
            }, "slow");
        }
        else if (scrollTop >= 700 && scrollTop < 1100) {
            $("#img1,#img2,#img3,#img4").animate({
                left: '0',
                opacity: '1',
            }, "slow", function () {
                $("#1").fadeOut(600);
                $("#2").fadeOut(600);
                $("#3").fadeOut(600);
                $("#4").fadeOut(600);
            });
        }
        else if (scrollTop >= 1100 && scrollTop < 1600) {
            $("#img5,#img6,#img7,#img8").animate({
                left: '0',
                opacity: '1',
            }, "slow", function () {
                $("#5").fadeOut(600);
                $("#6").fadeOut(600);
                $("#7").fadeOut(600);
                $("#8").fadeOut(600);
            });
        }
        else if (scrollTop >= 1600 && scrollTop < 2100) {
            $("#img9,#img10,#img11,#img12").animate({
                left: '0',
                opacity: '1',
            }, "slow", function () {
                $("#9").fadeOut(600);
                $("#10").fadeOut(600);
                $("#11").fadeOut(600);
                $("#12").fadeOut(600);
            });
        }
        else if (scrollTop >= 2100 && scrollTop < 2750) {
            $("#img13,#img14,#img15,#img16").animate({
                left: '0',
                opacity: '1',
            }, "slow", function () {
                $("#13").fadeOut(600);
                $("#14").fadeOut(600);
                $("#15").fadeOut(600);
                $("#16").fadeOut(600);
            });
        }
        else if (scrollTop > 2750) {
            $("#img17,#img18,#img19").animate({
                left: '0',
                opacity: '1',
            }, "slow", function () {
                $("#17").fadeOut(600);
                $("#18").fadeOut(600);
                $("#19").fadeOut(600);
            });
        }
    });
});

