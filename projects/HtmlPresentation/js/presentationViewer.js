// get the parameters from the URL
var url = new URL(window.location.href);
var presentationUrl = url.searchParams.get("presentationUrl");
var slideId = url.searchParams.get("slideId");

var presentation

var slideNumber = slideId ? parseInt(slideId) : 0;

const slideTitle = document.getElementById("slideTitle");
const slideContent = document.getElementById("slideContent");
const slideImage = document.getElementById("slideImage");
const slideSurface = document.getElementById("slideSurface");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("prevButton");

// Load the presentation json
fetch(presentationUrl)
    .then(response => response.json())
    .then(data => {
        presentation = data;
        
        setSlide(slideNumber);
    });

function setSlide(slideNumber){
    window.history.pushState({}, document.title, "?presentationUrl=" + presentationUrl + "&slideId=" + slideNumber);

    var slide = presentation.slides[slideNumber];
        
    setStyles(slide);

    document.title = slide.title;
    slideTitle.innerHTML = slide.title;
    slideContent.innerHTML = slide.content;
    slideImage.src = slide.image;

    slideSurface.className = slide.layout;

    if(slideNumber >= presentation.slides.length - 1){
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }

    if(slideNumber <= 0){
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "block";
    }
}



nextButton.addEventListener("click", function(){
    slideNumber++;
    setSlide(slideNumber);
});


previousButton.addEventListener("click", function (){
    slideNumber--;
    setSlide(slideNumber);
});

function setStyles(currentSlide){
    var r = document.querySelector(':root');

    // set colors
    r.style.setProperty('--text', currentSlide.style.text);
    r.style.setProperty('--background', currentSlide.style.background);
    r.style.setProperty('--primary', currentSlide.style.primary);
    r.style.setProperty('--secondary', currentSlide.style.secondary);
    r.style.setProperty('--accent', currentSlide.style.accent);

    // set fonts
    r.style.setProperty('--primary-font', currentSlide.style.primaryFont);
    r.style.setProperty('--secondary-font', currentSlide.style.secondaryFont);
}