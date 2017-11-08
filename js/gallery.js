/* ==========================================================================
   Eric Zorn
   ========================================================================== */


//GALLERY URL FOR FLICKR: https://www.flickr.com/photos/26198315@N00/galleries/72157623416138703


$(document).ready( function () {

    var url = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=bf5bbbc969b6608dfdc786d8955d12d6&gallery_id=6287720-72157623416138703&format=json&nojsoncallback=1";

    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText;
                var parsedResponse = JSON.parse(response);
                console.log(parsedResponse);

                //Initiating Gallery
                var gallery = document.getElementsByClassName('gallery')[0];



                // $.each(parsedResponse.photos, function(i, item) {
                //     $("<img />").attr("src", parsedResponse.photos.photo[0].id).appendTo(gallery);
                // });
                

                for (var i = 0; i < parsedResponse.photos.photo.length; i++) {
                    var title = parsedResponse.photos.photo[i].title;
                    console.log(title);

                    console.log(getImgUrl(parsedResponse.photos.photo[i]));

                    newImage(getImgUrl(parsedResponse.photos.photo[i]), title);
                }

                $("#flickr").slick({// centerMode: true,
                    // centerPadding: '60px',
                    adaptiveHeight: true,
                    variableWidth: true,
                    // centerMode: true,
                    // dots: true
                });
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();

    }

    document.onload = loadDoc();


    function getImgUrl(photodata) {
        return "https://farm"+photodata.farm+".staticflickr.com/"+photodata.server+'/'+
            photodata.id + '_' +photodata.secret+".jpg";
    }

    function newImage(source, altTag) {
        var creatImgEl = '<img src= "' + source + '"' + 'alt="' + altTag +'"/>';
        console.log(creatImgEl);
        $("#flickr").append(creatImgEl);
    }
});


// https://www.flickr.com/photos/seriouseats/10352134016