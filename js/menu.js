/* ==========================================================================
   Eric Zorn - ICT 4510 (Fall 2017)

   In this script, I am targeting the menu page of the website. I used an AJAX call after creating my own JSON document
   of the sandwich menu. The JSON document consists of the sandwich titles and the descriptions of each of the sandwiches.
   I stored the JSON response into the localStorage of the browser. I then was able to take the stringified response from the localStorage
   and parse the data back to JSON. I looped over the parsed data and generated an ordered list of the sandwich names that are appended to the DOM
   and the menu div. After this, I then appended individually, each of the different positions of the array that stored each of the sandwich descriptions to the DOM.
   These sandwich descriptions were appended as paragraph tags and were all stylized in the CSS, as well as the menu titles. This was again done
   with a combination of jQuery and Vanilla JavaScript. Most of the DOM manipulation was done with the jQuery. This menu will only populate when all of
   the HTML elements are loaded and the page is fully loaded as well. I also have added the alt attribute to the internal restaurant image with jQuery.
   ========================================================================== */

function loadMenu() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var menu = document.getElementById("menuList");
            var menuItems = document.querySelector(".menuNames");
            var response = this.responseText;

            window.localStorage.setItem("menu", response);

            var menuParsed = JSON.parse(window.localStorage.getItem("menu"));

            for (var i = 0; i < menuParsed.menu.sandwichNames.length; i++) {
                menu.innerHTML += "<li class='menuNames'>" + menuParsed.menu.sandwichNames[i] + "</li>";
            }

            //Menu Lists
            $(".menuNames").first().append("<p>" + menuParsed.menu.sandwichDescriptions[0] + "</p>");

            $(".menuNames:nth-child(2)").append("<p>" + menuParsed.menu.sandwichDescriptions[1] + "</p>");

            $(".menuNames:nth-child(3)").append("<p>" + menuParsed.menu.sandwichDescriptions[2] + "</p>");

            $(".menuNames:nth-child(4)").append("<p>" + menuParsed.menu.sandwichDescriptions[3] + "</p>");

            $(".menuNames:nth-child(5)").append("<p>" + menuParsed.menu.sandwichDescriptions[4] + "</p>");

            $(".menuNames:nth-child(6)").append("<p>" + menuParsed.menu.sandwichDescriptions[5] + "</p>");

            $(".menuNames:nth-child(7)").append("<p>" + menuParsed.menu.sandwichDescriptions[6] + "</p>");

            $(".menuNames:nth-child(8)").append("<p>" + menuParsed.menu.sandwichDescriptions[7] + "</p>");

            $(".menuNames:nth-child(9)").append("<p>" + menuParsed.menu.sandwichDescriptions[8] + "</p>");

            $(".menuNames:nth-child(10)").append("<p>" + menuParsed.menu.sandwichDescriptions[9] + "</p>");

            $(".menuNames:nth-child(11)").append("<p>" + menuParsed.menu.sandwichDescriptions[10] + "</p>");
        }
    };
    xhttp.open("GET", "JSON/sandwichMenu.json", true);
    xhttp.send();
}

document.onload = loadMenu();

$(document).ready(function () {
   var image = document.getElementById("restaurantImage");
   image.setAttribute("alt", "Restaurant Image Inside (From Google Images)");
});