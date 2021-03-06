/* ==========================================================================
   Eric Zorn - ICT 4510 (Fall 2017)

   In this JavaScript document, I am rendering the needed JS for the About page of the document.
   I am initializing a Google Map from the Google Maps API for JavaScript. I have generated my own
   API token for this specific project. Once I have done that, inside of the initMap() function, I have gotten the
   ID of the map and filled it with the correct coordinates of the University of Denver and styling from the Google Maps
   styling page of the Google Maps API. I also have placed the marker from the API for the University of Denver's location.
   I have pulled in data via an AJAX request from the ip-api JSON website. I wrote that data to the DOM inside of an H3 element.
   This way, you can see where your location, relative to the University of Denver/Restaurant is. The information is dynamic
   and will be changing depending on your IP address. All styling is custom and with Bootstrap
   ========================================================================== */


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

 
function successPosition(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`); //ES6 String Concatenation
    console.log(`Longitude: ${crd.longitude}`); //ES6 String Concatenation
}

document.onload = navigator.geolocation.getCurrentPosition(successPosition);

document.onload = initMap;

//Location of Yourself at the Moment
$.ajax({
   type: "GET",
   dataType: "json",
   url: "http://ip-api.com/json",
   success: function (responseData) {
       const location = document.getElementById("location");
       location.innerHTML = "Your location is: " + responseData["city"] + ", " + responseData["region"] + ", " + responseData["country"] + ", " + responseData["zip"];
       $("#location").addClass("location");

       console.log("Your location is: " + responseData["city"] + ", " + responseData["region"] + ", " + responseData["country"] + ", " + responseData["zip"]);
   }
});