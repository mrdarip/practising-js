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
    var r = document.querySelector(':root');

    // set colors
    r.style.setProperty('--text', presentation.styles.text);
    r.style.setProperty('--background', presentation.styles.background);
    r.style.setProperty('--primary', presentation.styles.primary);
    r.style.setProperty('--secondary', presentation.styles.secondary);
    r.style.setProperty('--accent', presentation.styles.accent);
}