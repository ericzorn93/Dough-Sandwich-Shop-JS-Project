/* ==========================================================================
   Eric Zorn - ICT 4510 (Fall 2017)

   In this script window, I added JavaScript/jQuery to state that there is a specific active class styling on the different
   navigation links. All of the other links will not share the same active class if the link is not active. jQuery allowed
   me to be able to take care of editing the styling and adding classes to parent elements with ease. Doing this in standard
   JavaScript would potentially be much more difficult. I also added a custom Slick JS library for an image slider of embedded images
   from my image folder in my project root. Unlike the gallery, these images are not being populated from an API on Flickr. The controls
   and Slick JS styling are being controlled from the library with the object literal inside of the slick method. It states that it
   can be infinitely toggled with dots as navigation indicators. It also is adaptive to the height and width of the image. All images are
   centered as well.
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

});