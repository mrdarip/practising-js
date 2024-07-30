// get the parameters from the URL
var url = new URL(window.location.href);
var presentationUrl = url.searchParams.get("presentationUrl");

var presentation

var slideNumber = 0;

const slideTitle = document.getElementById("slideTitle");
const slideContent = document.getElementById("slideContent");
const slideImage = document.getElementById("slideImage");
const slideSurface = document.getElementById("slideSurface");

// Load the presentation json
fetch(presentationUrl)
    .then(response => response.json())
    .then(data => {
        presentation = data;
        setStyles();
        setSlide(slideNumber);
    });

function setSlide(slideNumber){
    var slide = presentation.slides[slideNumber];
        
    document.title = slide.title;
    slideTitle.innerHTML = slide.title;
    slideContent.innerHTML = slide.content;
    slideImage.src = slide.image;

    slideSurface.className = slide.layout;
}

function nextSlide(){
    slideNumber++;
    setSlide(slideNumber);
}

function previousSlide(){
    slideNumber--;
    setSlide(slideNumber);
}

function setStyles(){
    document.body.style.backgroundColor = presentation.style.backgroundColor;
    document.body.style.color = presentation.style.color;
}