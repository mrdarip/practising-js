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
        
        setSlide(slideNumber);
    });

function setSlide(slideNumber){
    var slide = presentation.slides[slideNumber];
        
    setStyles(slide);

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

function setStyles(currentSlide){
    var r = document.querySelector(':root');

    // set colors
    r.style.setProperty('--text', currentSlide.style.text);
    r.style.setProperty('--background', currentSlide.style.background);
    r.style.setProperty('--primary', currentSlide.style.primary);
    r.style.setProperty('--secondary', currentSlide.style.secondary);
    r.style.setProperty('--accent', currentSlide.style.accent);
}