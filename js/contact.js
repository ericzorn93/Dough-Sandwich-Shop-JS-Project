/* ==========================================================================
   Eric Zorn - ICT 4510

   This page is my contact me page for the Dough Sandwich Shop Website.
   ========================================================================== */

$(document).ready(function () {
    //Inputs Object
   var inputs = {
       fullName: $("#fullName"),
       email: $("#email"),
       message: $("#message")
   };


   if (inputs.fullName.val() === "") {
       inputs.fullName.focus();
   }


   //Contact Form Submit
    function formPost() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                console.log(this.responseText);

                var responseJSON = JSON.parse(this.responseText);

                $("#echo-response").addClass("phpInfo").fadeIn();

                var load = $("#echo-response").html(responseJSON.message.toUpperCase()).hide();

                $("#formButton").click(function () {
                    load.show(2000);
                });
            }
        };
        xhttp.open("GET", "process.php", true);
        xhttp.send();
    }

    formPost();
    



   //Form Validation with jQuery Validate Library/Plugin
    
    $("#contactForm").validate({
        submitHandler: function (form) {

        },
        messages: {
            fullName: {
                required: "You must enter your Full Name!"
            },
            email: {
                required: "You must enter your email address!"
            },
            message: {
                required: "Please type us a message for us to be able to get back to you!"
            }
        }
    });

});





//Initialize Map
function initMap() {

    var mapHTML = document.getElementById("map");

    var coords = {lat: 39.678121, lng: -104.961753};

    var map = new google.maps.Map(mapHTML, {
        zoom: 12,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ],
        center: coords
    });

    var marker = new google.maps.Marker({
        position: coords,
        map: map
    });
}

document.onload = initMap;