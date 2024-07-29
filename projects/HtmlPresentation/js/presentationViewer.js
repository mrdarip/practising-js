// get the parameters from the URL
var url = new URL(window.location.href);
var presentationUrl = url.searchParams.get("presentationUrl");

var presentation

var slideNumber = 0;

const slideTitle = document.getElementById("slideTitle");
const slideContent = document.getElementById("slideContent");
const slideImage = document.getElementById("slideImage");

// Load the presentation json
fetch(presentationUrl)
    .then(response => response.json())
    .then(data => {
        presentation = data;

        var generalData = document.createElement("div");
        generalData.innerHTML = "<p> Style:" + JSON.stringify(data.style, null, 2); + "</p>";
        document.body.appendChild(generalData);

        setSlide(slideNumber);
    });

function setSlide(slideNumber){
    var slide = presentation.slides[slideNumber];
        
    document.title = slide.title;
    slideTitle.innerHTML = slide.title;
    slideContent.innerHTML = slide.content;
    slideImage.src = slide.image;
}

function nextSlide(){
    slideNumber++;
    setSlide(slideNumber);
}

function previousSlide(){
    slideNumber--;
    setSlide(slideNumber);
}