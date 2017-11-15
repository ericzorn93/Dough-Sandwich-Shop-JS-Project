/* ==========================================================================
   Eric Zorn - ICT 4510 (Fall 2017)

   This is the Gallery page for the Dough Sandwich Shop website. I was able to do many awesome things in this page with JavaScript.
   First, I obtained an API key and utilized the Flickr API to build an image gallery. Using the loadDoc() function, I utilized
   an AJAX call to be able to retrieve a JSON information file of the different sandwich images that were located within a public
   Flickr gallery. The gallery was focused on sandwich images from many different Flickr users. From the API's JSON response,
   I was able to loop over the array of photos and generate a URL of each individual image. I was able to create these image links
   from making a function that gets the image URL and then taking the generated URL to create a new image with the proper HTML markup from the newImage() function
   I had created. Once the list of image elements was constructed from the JavaScript file, I was then able to use the Slick library again.
   I generated another image slide gallery that formed on the image div container. All of these images in the slider were directly
   from the Flickr library plugin and then applied to the DOM with JavaScript. All images come from the gallery titled Sandwich! by Little Grey.
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