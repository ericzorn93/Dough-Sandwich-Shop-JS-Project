/* ==========================================================================
   Eric Zorn - ICT 4510

   This page is my contact me page for the Dough Sandwich Shop Website. In this page, I was able to take the different user
   inputs and obtain the values from the DOM when the user is done typing the input into the form inputs. There are
   three different inputs: Full Name, Email Address, and Enter Message Here (Message). I was able to then send the information with
   an AJAX call to the server and obtain the PHP echo response that responds with a "Thank you for Responding" Message.
   The message from the PHP document can only be rendered if you are running a local server like MAMP on your computer and
   will appear after the user clicks the submit button in the DOM. I also utilized the jQuery Validate Plugin to the jQuqery library.
   The library uses many different possible API features. I used the submitHandler property and assigned each of the specific inputs
   different messages for error responses if the input is not filled in by the users. I also have used subtle CSS reminders for the user
   on the different inputs for blank fields or incompatible field inputs. After using the jQuery Validate plugin, I reused the
   Google Maps API to import the same Google Map of the University of Denver and the marker on the map.
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