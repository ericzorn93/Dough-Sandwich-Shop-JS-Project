/* ==========================================================================
   Eric Zorn
   ========================================================================== */

$(document).ready(function () {

    //Menu Activation Links
    if (window.location.href === "http://localhost:63342/ericZornFinalProject/index.html") {
        $("#home").parent().addClass("active");
    } else if (window.location.href === "http://localhost:63342/ericZornFinalProject/about.html") {
        $("#about").parent().addClass("active");
    } else if (window.location.href === "http://localhost:63342/ericZornFinalProject/menu.html") {
        $("#menu").parent().addClass("active");
    } else if (window.location.href === "http://localhost:63342/ericZornFinalProject/gallery.html") {
        $("#gallery").parent().addClass("active");
    } else if (window.location.href === "http://localhost:63342/ericZornFinalProject/contact.html") {
        $("#contact").parent().addClass("active");
    }


    // Create Slick jQuery Carousel
    $(".faded").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        variableWidth: true,
        centerMode: true
    });


    if ($.contains(document.body, "// Add the new slick-theme.css if you want the default styling\n" )) {
        console.log(true);
    } // true

});