// get the parameters from the URL
var url = new URL(window.location.href);
var presentationUrl = url.searchParams.get("presentationUrl");

var presentation
// Load the presentation json
fetch(presentationUrl)
    .then(response => response.json())
    .then(data => {
        presentation = data;

        var generalData = document.createElement("div");
        generalData.innerHTML = "<p> Style:" + JSON.stringify(data.style, null, 2); + "</p>";
        document.body.appendChild(generalData);

        setSlide(0);
    });

    function setSlide(slideNumber){
        var slide = presentation.slides[slideNumber];

        var slideElement = document.createElement("div");
        slideElement.classList.add("slide");
        slideElement.innerHTML = "<h2>" + slide.title + "</h2>" + "<p>" + slide.content + "</p>" + "<img src='" + slide.image + "'/>";
        document.body.appendChild(slideElement);
    }