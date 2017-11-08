/* ==========================================================================
   Eric Zorn
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